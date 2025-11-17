import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerDelete = {
	operation: ['delete'],
	resource: ['customer'],
};

export const customerDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: { show: showOnlyForCustomerDelete },
		default: '',
		required: true,
		description: 'The customer ID (UUID) to delete',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
];

