import type { INodeProperties } from 'n8n-workflow';
import { subscriptionFindDescription } from './find';
import { subscriptionUpdatePaymentMethodDescription } from './updatePaymentMethod';

const showOnlyForSubscriptions = {
	resource: ['subscription'],
};

export const subscriptionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSubscriptions,
		},
		options: [
			{
				name: 'Find',
				value: 'find',
				action: 'Find a subscription',
				description: 'Search for subscription by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/subscriptions/{{$parameter.subscriptionId}}',
					},
				},
			},
			{
				name: 'Update Payment Method',
				value: 'updatePaymentMethod',
				action: 'Update subscription payment method',
				description: 'Update subscriptions payment method',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/subscriptions/{{$parameter.subscriptionId}}/payment-method',
					},
				},
			},
		],
		default: 'find',
	},
	...subscriptionFindDescription,
	...subscriptionUpdatePaymentMethodDescription,
];

