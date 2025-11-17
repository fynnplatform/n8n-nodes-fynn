import type { INodeProperties } from 'n8n-workflow';

const showOnlyForInvoiceFind = {
	operation: ['find'],
	resource: ['invoice'],
};

export const invoiceFindDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'string',
		displayOptions: { show: showOnlyForInvoiceFind },
		default: '',
		required: true,
		description: 'The invoice ID (UUID) to search for',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
];

