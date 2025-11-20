import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscriptionCancel = {
	operation: ['cancel'],
	resource: ['subscription'],
};

export const subscriptionCancelDescription: INodeProperties[] = [
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscriptionCancel },
		default: '',
		required: true,
		description: 'The subscription ID (UUID) to cancel',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
	{
		displayName: 'Cancellation Date Type',
		name: 'cancellationDateType',
		type: 'options',
		displayOptions: { show: showOnlyForSubscriptionCancel },
		options: [
			{
				name: 'Immediate',
				value: 'immediate',
				description: 'Cancel immediately',
			},
			{
				name: 'Next Possible',
				value: 'next_possible',
				description: 'Cancel at the next possible date',
			},
			{
				name: 'Custom',
				value: 'custom',
				description: 'Cancel at a custom date',
			},
		],
		default: 'next_possible',
		required: true,
		description: 'The type how the cancellation date should be interpreted',
		routing: {
			send: {
				type: 'body',
				property: 'cancellationDateType',
			},
		},
	},
	{
		displayName: 'Cancellation Date',
		name: 'cancellationDate',
		type: 'dateTime',
		displayOptions: {
			show: {
				...showOnlyForSubscriptionCancel,
				cancellationDateType: ['custom'],
			},
		},
		default: '',
		required: true,
		description: 'The date when the subscription should be cancelled. Required if the type is custom.',
		routing: {
			send: {
				type: 'body',
				property: 'cancellationDate',
			},
		},
	},
	{
		displayName: 'Send Confirmation Email',
		name: 'sendConfirmationEmail',
		type: 'boolean',
		displayOptions: { show: showOnlyForSubscriptionCancel },
		default: true,
		description: 'Whether the confirmation email should be sent to the customer',
		routing: {
			send: {
				type: 'body',
				property: 'sendConfirmationEmail',
			},
		},
	},
	{
		displayName: 'Reason',
		name: 'reason',
		type: 'string',
		displayOptions: { show: showOnlyForSubscriptionCancel },
		default: '',
		description: 'The reason code why the subscription should be cancelled',
		routing: {
			send: {
				type: 'body',
				property: 'reason',
			},
		},
	},
];

