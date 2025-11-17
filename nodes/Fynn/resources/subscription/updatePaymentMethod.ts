import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscriptionUpdatePaymentMethod = {
	operation: ['updatePaymentMethod'],
	resource: ['subscription'],
};

export const subscriptionUpdatePaymentMethodDescription: INodeProperties[] = [
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscriptionUpdatePaymentMethod },
		default: '',
		required: true,
		description: 'The subscription ID (UUID) to update payment method for',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
	{
		displayName: 'Payment Method ID',
		name: 'paymentMethodId',
		type: 'string',
		displayOptions: { show: showOnlyForSubscriptionUpdatePaymentMethod },
		default: '',
		required: true,
		description: 'The payment method ID (UUID) to set',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
		routing: {
			send: {
				type: 'body',
				property: 'paymentMethodId',
			},
		},
	},
];

