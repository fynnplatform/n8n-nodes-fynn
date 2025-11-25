import type {
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	IHookFunctions,
	IDataObject,
} from 'n8n-workflow';
import { NodeConnectionTypes, ApplicationError } from 'n8n-workflow';
import { webhookDescription } from './resources/webhook';
import { createHmac } from 'crypto';

export class FynnTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Fynn Trigger',
		name: 'fynnTrigger',
		icon: { light: 'file:fynn.svg', dark: 'file:fynn.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description: 'Starts the workflow when Fynn events occur',
		defaults: {
			name: 'Fynn Trigger',
		},
		usableAsTool: true,
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'fynnApi', required: true }],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		requestDefaults: {
			baseURL: '=https://{{$credentials.tenantName}}.coreapi.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [...webhookDescription],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookId = this.getWorkflowStaticData('node').webhookId as string | undefined;
				return !!webhookId;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const event = this.getNodeParameter('event') as string;
				const options = this.getNodeParameter('options', {}) as { autoRegister?: boolean };
				const webhookUrl = this.getNodeWebhookUrl('default');
				const credentials = await this.getCredentials('fynnApi');
				const tenantName = credentials.tenantName as string;
				const accessToken = credentials.accessToken as string;

				// Skip auto-registration if disabled
				if (options.autoRegister === false) {
					return true;
				}

				try {
					const response = await this.helpers.httpRequest({
						method: 'POST',
						url: `https://${tenantName}.coreapi.io/webhooks`,
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${accessToken}`,
						},
						body: {
							version: 'v1',
							events: [event],
							enabled: true,
							url: webhookUrl,
						},
						json: true,
					});

					if (response.id) {
						this.getWorkflowStaticData('node').webhookId = response.id;
						return true;
					}
				} catch (error) {
					const errorResponse = error as { response?: { data?: unknown }; message?: string };
					const errorMessage =
						(errorResponse.response?.data as { message?: string })?.message ||
						errorResponse.message ||
						String(error);
					const errorDetails = errorResponse.response?.data
						? JSON.stringify(errorResponse.response.data)
						: '';
					throw new ApplicationError(`Failed to register webhook: ${errorMessage}${errorDetails ? ` - ${errorDetails}` : ''}`, {
						level: 'error',
					});
				}

				return false;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookId = this.getWorkflowStaticData('node').webhookId as string | undefined;
				const options = this.getNodeParameter('options', {}) as { autoRegister?: boolean };
				const credentials = await this.getCredentials('fynnApi');
				const tenantName = credentials.tenantName as string;
				const accessToken = credentials.accessToken as string;

				// Skip deletion if auto-registration is disabled
				if (options.autoRegister === false || !webhookId) {
					return true;
				}

				try {
					await this.helpers.httpRequest({
						method: 'DELETE',
						url: `https://${tenantName}.coreapi.io/webhooks/${webhookId}`,
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					});

					delete this.getWorkflowStaticData('node').webhookId;
					return true;
				} catch (error) {
					const errorResponse = error as { response?: { data?: unknown }; message?: string };
					const errorMessage =
						(errorResponse.response?.data as { message?: string })?.message ||
						errorResponse.message ||
						String(error);
					const errorDetails = errorResponse.response?.data
						? JSON.stringify(errorResponse.response.data)
						: '';
					throw new ApplicationError(`Failed to delete webhook: ${errorMessage}${errorDetails ? ` - ${errorDetails}` : ''}`, {
						level: 'error',
					});
				}
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const event = this.getNodeParameter('event') as string;
		const webhookSecret = this.getNodeParameter('webhookSecret') as string;
		const req = this.getRequestObject();
		
		// Get raw body for signature validation
		const rawBody = this.getBodyData();
		const body = typeof rawBody === 'string' ? rawBody : JSON.stringify(req.body);
		const bodyData = (typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody) as IDataObject | IDataObject[];

		// n8n sends webhook data as an array with a wrapper object
		// Extract the actual webhook payload from the wrapper
		let webhookPayload: IDataObject;
		if (Array.isArray(bodyData) && bodyData.length > 0) {
			// n8n format: [{ body: { event: {...}, data: {...} }, headers: {...}, ... }]
			const wrapper = bodyData[0] as IDataObject;
			webhookPayload = (wrapper.body as IDataObject) || wrapper;
		} else {
			// Fallback: assume direct format
			webhookPayload = bodyData as IDataObject;
		}

		// Validate webhook signature
		if (webhookSecret) {
			const signature = req.headers['x-webhook-signature'] as string;
			const expectedSignature = createHmac('sha256', webhookSecret)
				.update(body)
				.digest('hex');

			if (signature !== expectedSignature) {
				return {
					workflowData: [],
					webhookResponse: {
						error: 'Invalid signature',
					},
				};
			}
		}

		// Check if the event matches the configured event
		// The event type is in webhookPayload.event.type
		const eventData = webhookPayload?.event as IDataObject;
		const webhookEvent = eventData?.type as string || webhookPayload?.event as string || webhookPayload?.type as string;
		
		if (webhookEvent && webhookEvent !== event) {
			return {
				workflowData: [],
				noWebhookResponse: true,
			};
		}

		// Return the actual webhook payload (event + data), not the wrapper
		return {
			workflowData: [this.helpers.returnJsonArray(webhookPayload)],
		};
	}
}

