import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscriptionUpdateInvoiceAddress = {
	operation: ['updateInvoiceAddress'],
	resource: ['subscription'],
};

export const subscriptionUpdateInvoiceAddressDescription: INodeProperties[] = [
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscriptionUpdateInvoiceAddress },
		default: '',
		required: true,
		description: 'The subscription ID (UUID) to update invoice address for',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
	{
		displayName: 'Invoice Address ID',
		name: 'invoiceAddressId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscriptionUpdateInvoiceAddress },
		default: '',
		required: true,
		description:
			'The invoice address ID (UUID) to set. If not set, the default invoice address of the customer is used.',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
		routing: {
			send: {
				type: 'body',
				property: 'invoiceAddress',
			},
		},
	},
];

