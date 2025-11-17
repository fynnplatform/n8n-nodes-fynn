import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerArchive = {
	operation: ['archive'],
	resource: ['customer'],
};

export const customerArchiveDescription: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: { show: showOnlyForCustomerArchive },
		default: '',
		required: true,
		description: 'The customer ID (UUID) to archive',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
];

