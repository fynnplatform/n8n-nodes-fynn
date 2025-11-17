import type { INodeProperties } from 'n8n-workflow';
import { invoiceFindDescription } from './find';

const showOnlyForInvoices = {
	resource: ['invoice'],
};

export const invoiceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForInvoices,
		},
		options: [
			{
				name: 'Find',
				value: 'find',
				action: 'Find an invoice',
				description: 'Search for invoice by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/invoices/{{$parameter.invoiceId}}',
					},
				},
			},
		],
		default: 'find',
	},
	...invoiceFindDescription,
];

