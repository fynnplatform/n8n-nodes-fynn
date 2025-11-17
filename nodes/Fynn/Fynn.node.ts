import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { customerDescription } from './resources/customer';
import { subscriptionDescription } from './resources/subscription';
import { invoiceDescription } from './resources/invoice';

export class Fynn implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Fynn',
		name: 'fynn',
		icon: { light: 'file:fynn.svg', dark: 'file:fynn.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Fynn API',
		defaults: {
			name: 'Fynn',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'fynnApi', required: true }],
		requestDefaults: {
			baseURL: '=https://{{$credentials.tenantName}}.coreapi.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Subscription',
						value: 'subscription',
					},
					{
						name: 'Invoice',
						value: 'invoice',
					},
				],
				default: 'customer',
			},
			...customerDescription,
			...subscriptionDescription,
			...invoiceDescription,
		],
	};
}
