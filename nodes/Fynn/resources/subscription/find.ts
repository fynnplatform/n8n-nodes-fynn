import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscriptionFind = {
	operation: ['find'],
	resource: ['subscription'],
};

export const subscriptionFindDescription: INodeProperties[] = [
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscriptionFind },
		default: '',
		required: true,
		description: 'The subscription ID (UUID) to search for',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
];

