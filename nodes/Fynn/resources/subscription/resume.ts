import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscriptionResume = {
	operation: ['resume'],
	resource: ['subscription'],
};

export const subscriptionResumeDescription: INodeProperties[] = [
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscriptionResume },
		default: '',
		required: true,
		description: 'The subscription ID (UUID) to resume',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
	{
		displayName: 'Next Billing Date',
		name: 'nextBillingDate',
		type: 'dateTime',
		displayOptions: { show: showOnlyForSubscriptionResume },
		default: '',
		description:
			'The date when the subscription should resume. The next billing date will be set to all items. The billing will start from this date and previous will be ignored. Otherwise all previous missing billing periods will be billed.',
		routing: {
			send: {
				type: 'body',
				property: 'nextBillingDate',
			},
		},
	},
];

