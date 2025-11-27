import type {
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
	IHookFunctions,
	IDataObject,
} from 'n8n-workflow';
import { NodeConnectionTypes, ApplicationError } from 'n8n-workflow';

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
		properties: [
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				required: true,
				noDataExpression: true,
				options: [
					{
						name: 'Cart Completed',
						value: 'cart.completed',
						description: 'Triggered when a cart is completed',
					},
					{
						name: 'Cart Paid',
						value: 'cart.paid',
						description: 'Triggered when a cart is paid',
					},
					{
						name: 'Coupon Created',
						value: 'coupon.created',
						description: 'Triggered when a coupon is created',
					},
					{
						name: 'Coupon Deleted',
						value: 'coupon.deleted',
						description: 'Triggered when a coupon is deleted',
					},
					{
						name: 'Coupon Toggled',
						value: 'coupon.toggled',
						description: 'Triggered when a coupon is toggled',
					},
					{
						name: 'Coupon Updated',
						value: 'coupon.updated',
						description: 'Triggered when a coupon is updated',
					},
					{
						name: 'Customer Archived',
						value: 'customer.archived',
						description: 'Triggered when a customer is archived',
					},
					{
						name: 'Customer Created',
						value: 'customer.created',
						description: 'Triggered when a customer is created',
					},
					{
						name: 'Customer Deleted',
						value: 'customer.deleted',
						description: 'Triggered when a customer is deleted',
					},
					{
						name: 'Customer Unarchived',
						value: 'customer.unarchived',
						description: 'Triggered when a customer is unarchived',
					},
					{
						name: 'Customer Updated',
						value: 'customer.updated',
						description: 'Triggered when a customer is updated',
					},
					{
						name: 'Dunning Document Canceled',
						value: 'dunning_document.canceled',
						description: 'Triggered when a dunning document is canceled',
					},
					{
						name: 'Dunning Document Created',
						value: 'dunning_document.created',
						description: 'Triggered when a dunning document is created',
					},
					{
						name: 'Dunning Document Paid',
						value: 'dunning_document.paid',
						description: 'Triggered when a dunning document is paid',
					},
					{
						name: 'Entitlement State Updated',
						value: 'entitlement.state.updated',
						description: 'Triggered when an entitlement state is updated',
					},
					{
						name: 'Feature Activated',
						value: 'feature.activated',
						description: 'Triggered when a feature is activated',
					},
					{
						name: 'Feature Archived',
						value: 'feature.archived',
						description: 'Triggered when a feature is archived',
					},
					{
						name: 'Feature Created',
						value: 'feature.created',
						description: 'Triggered when a feature is created',
					},
					{
						name: 'Invoice Canceled',
						value: 'invoice.canceled',
						description: 'Triggered when an invoice is canceled',
					},
					{
						name: 'Invoice Closed',
						value: 'invoice.closed',
						description: 'Triggered when an invoice is closed',
					},
					{
						name: 'Invoice Created',
						value: 'invoice.created',
						description: 'Triggered when an invoice is created',
					},
					{
						name: 'Invoice Credited',
						value: 'invoice.credited',
						description: 'Triggered when an invoice is credited',
					},
					{
						name: 'Invoice Finalized',
						value: 'invoice.finalized',
						description: 'Triggered when an invoice is finalized',
					},
					{
						name: 'Invoice Paid',
						value: 'invoice.paid',
						description: 'Triggered when an invoice is paid',
					},
					{
						name: 'Invoice Payment Method Updated',
						value: 'invoice.payment_method.updated',
						description: 'Triggered when an invoice payment method is updated',
					},
					{
						name: 'Invoice Refunded',
						value: 'invoice.refunded',
						description: 'Triggered when an invoice is refunded',
					},
					{
						name: 'Invoice Remindered',
						value: 'invoice.remindered',
						description: 'Triggered when an invoice reminder is sent',
					},
					{
						name: 'Invoice Requires Approval',
						value: 'invoice.requires_approval',
						description: 'Triggered when an invoice requires approval',
					},
					{
						name: 'Invoice Unpaid',
						value: 'invoice.unpaid',
						description: 'Triggered when an invoice becomes unpaid',
					},
					{
						name: 'Invoice Updated',
						value: 'invoice.updated',
						description: 'Triggered when an invoice is updated',
					},
					{
						name: 'Payment Method Created',
						value: 'payment_method.created',
						description: 'Triggered when a payment method is created',
					},
					{
						name: 'Payment Method Updated',
						value: 'payment_method.updated',
						description: 'Triggered when a payment method is updated',
					},
					{
						name: 'Price Plan Archived',
						value: 'price_plan.archived',
						description: 'Triggered when a price plan is archived',
					},
					{
						name: 'Product Archived',
						value: 'product.archived',
						description: 'Triggered when a product is archived',
					},
					{
						name: 'Product Created',
						value: 'product.created',
						description: 'Triggered when a product is created',
					},
					{
						name: 'Product Deleted',
						value: 'product.deleted',
						description: 'Triggered when a product is deleted',
					},
					{
						name: 'Product Updated',
						value: 'product.updated',
						description: 'Triggered when a product is updated',
					},
					{
						name: 'Subscription Activated',
						value: 'subscription.activated',
						description: 'Triggered when a subscription is activated',
					},
					{
						name: 'Subscription Billed',
						value: 'subscription.billed',
						description: 'Triggered when a subscription is billed',
					},
					{
						name: 'Subscription Canceled',
						value: 'subscription.canceled',
						description: 'Triggered when a subscription is canceled',
					},
					{
						name: 'Subscription Cancellation Revoked',
						value: 'subscription.cancellation_revoked',
						description: 'Triggered when a subscription cancellation is revoked',
					},
					{
						name: 'Subscription Changed',
						value: 'subscription.changed',
						description: 'Triggered when a subscription is changed',
					},
					{
						name: 'Subscription Created',
						value: 'subscription.created',
						description: 'Triggered when a subscription is created',
					},
					{
						name: 'Subscription Delivery Address Updated',
						value: 'subscription.delivery_address.updated',
						description: 'Triggered when a subscription delivery address is updated',
					},
					{
						name: 'Subscription Invoice Address Updated',
						value: 'subscription.invoice_address.updated',
						description: 'Triggered when a subscription invoice address is updated',
					},
					{
						name: 'Subscription Item Instant Metered',
						value: 'subscription.item.instant_metered',
						description: 'Triggered when a subscription item instant metered event occurs',
					},
					{
						name: 'Subscription Item Metered',
						value: 'subscription.item.metered',
						description: 'Triggered when a subscription item metered event occurs',
					},
					{
						name: 'Subscription Item Quantity Changed',
						value: 'subscription.item.quantity_changed',
						description: 'Triggered when a subscription item quantity is changed',
					},
					{
						name: 'Subscription Item Terminated',
						value: 'subscription_item.terminated',
						description: 'Triggered when a subscription item is terminated',
					},
					{
						name: 'Subscription Paused',
						value: 'subscription.paused',
						description: 'Triggered when a subscription is paused',
					},
					{
						name: 'Subscription Payment Method Updated',
						value: 'subscription.payment_method.updated',
						description: 'Triggered when a subscription payment method is updated',
					},
					{
						name: 'Subscription Products Ordered',
						value: 'subscription.products.ordered',
						description: 'Triggered when subscription products are ordered',
					},
					{
						name: 'Subscription Resumed',
						value: 'subscription.resumed',
						description: 'Triggered when a subscription is resumed',
					},
					{
						name: 'Subscription Terminated',
						value: 'subscription.terminated',
						description: 'Triggered when a subscription is terminated',
					},
					{
						name: 'Subscription Trial Expired',
						value: 'subscription.trial_expired',
						description: 'Triggered when a subscription trial expires',
					},
					{
						name: 'Subscription Trial Extended',
						value: 'subscription.trial_extended',
						description: 'Triggered when a subscription trial is extended',
					},
					{
						name: 'Subscription Updated',
						value: 'subscription.updated',
						description: 'Triggered when a subscription is updated',
					},
				],
				default: 'customer.created',
				description: 'The Fynn event to listen for',
			},
			{
				displayName: 'Webhook Secret',
				name: 'webhookSecret',
				type: 'string',
				typeOptions: {
					password: true,
				},
				default: '',
				description:
					'The webhook secret to validate the signature. You can find this in Fynn Settings → Webhooks → Details.',
			},
			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				options: [
					{
						displayName: 'Auto Register Webhook',
						name: 'autoRegister',
						type: 'boolean',
						default: true,
						description:
							'Whether to automatically register the webhook with Fynn when the workflow is activated',
					},
				],
			},
		],
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
					throw new ApplicationError(
						`Failed to register webhook: ${errorMessage}${
							errorDetails ? ` - ${errorDetails}` : ''
						}`,
						{
							level: 'error',
						},
					);
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
					throw new ApplicationError(
						`Failed to delete webhook: ${errorMessage}${
							errorDetails ? ` - ${errorDetails}` : ''
						}`,
						{
							level: 'error',
						},
					);
				}
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		const body = req.body as IDataObject | IDataObject[];
		
		return {
			workflowData: [this.helpers.returnJsonArray(body)],
			webhookResponse: {
				statusCode: 200,
				body: { received: true },
			},
		};
	}
}


