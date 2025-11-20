import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscriptionExtendTrial = {
	operation: ['extendTrial'],
	resource: ['subscription'],
};

export const subscriptionExtendTrialDescription: INodeProperties[] = [
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscriptionExtendTrial },
		default: '',
		required: true,
		description: 'The subscription ID (UUID) to extend trial for',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
	{
		displayName: 'Trial Ends On',
		name: 'trialEndsOn',
		type: 'dateTime',
		displayOptions: { show: showOnlyForSubscriptionExtendTrial },
		default: '',
		required: true,
		description: 'The date when the trial period should end',
		routing: {
			send: {
				type: 'body',
				property: 'trialEndsOn',
			},
		},
	},
];

