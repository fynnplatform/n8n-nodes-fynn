import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerFind = {
	operation: ['find'],
	resource: ['customer'],
};

export const customerFindDescription: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: { show: showOnlyForCustomerFind },
		default: '',
		required: true,
		description: 'The customer ID (UUID) or external ID to search for',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
];

