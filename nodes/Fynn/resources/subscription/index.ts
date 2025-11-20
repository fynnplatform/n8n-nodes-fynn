import type { INodeProperties } from 'n8n-workflow';
import { subscriptionFindDescription } from './find';
import { subscriptionGetManyDescription } from './getAll';
import { subscriptionUpdatePaymentMethodDescription } from './updatePaymentMethod';
import { subscriptionUpdateInvoiceAddressDescription } from './updateInvoiceAddress';
import { subscriptionPauseDescription } from './pause';
import { subscriptionResumeDescription } from './resume';
import { subscriptionRevokeTrialDescription } from './revokeTrial';
import { subscriptionExtendTrialDescription } from './extendTrial';
import { subscriptionCancelDescription } from './cancel';

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
				name: 'Cancel',
				value: 'cancel',
				action: 'Cancel subscription',
				description: 'Cancel the subscription. This will stop billing and the subscription will be inactive after the cancellation date.',
				routing: {
					request: {
						method: 'PUT',
						url: '=/subscriptions/{{$parameter.subscriptionId}}/cancel',
					},
				},
			},
			{
				name: 'Extend Trial',
				value: 'extendTrial',
				action: 'Extend subscription trial',
				description: 'Extend the trial period of the subscription',
				routing: {
					request: {
						method: 'PUT',
						url: '=/subscriptions/{{$parameter.subscriptionId}}/extend-trial',
					},
				},
			},
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
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many subscriptions',
				description: 'Get all subscriptions with filtering and pagination',
				routing: {
					request: {
						method: 'GET',
						url: '/subscriptions',
					},
				},
			},
			{
				name: 'Pause',
				value: 'pause',
				action: 'Pause subscription',
				description: 'Pause the subscription. This will stop billing and the subscription will be inactive.',
				routing: {
					request: {
						method: 'PUT',
						url: '=/subscriptions/{{$parameter.subscriptionId}}/pause',
					},
				},
			},
			{
				name: 'Resume',
				value: 'resume',
				action: 'Resume subscription',
				description: 'Resume the subscription. This will start billing again.',
				routing: {
					request: {
						method: 'PUT',
						url: '=/subscriptions/{{$parameter.subscriptionId}}/resume',
					},
				},
			},
			{
				name: 'Revoke Trial',
				value: 'revokeTrial',
				action: 'Revoke subscription trial',
				description: 'Revoke the trial period of the subscription and start billing immediately',
				routing: {
					request: {
						method: 'PUT',
						url: '=/subscriptions/{{$parameter.subscriptionId}}/revoke-trial',
					},
				},
			},
			{
				name: 'Update Invoice Address',
				value: 'updateInvoiceAddress',
				action: 'Update subscription invoice address',
				description: 'Update the invoice address of the subscription',
				routing: {
					request: {
						method: 'PUT',
						url: '=/subscriptions/{{$parameter.subscriptionId}}/invoice-address',
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
	...subscriptionGetManyDescription,
	...subscriptionUpdatePaymentMethodDescription,
	...subscriptionUpdateInvoiceAddressDescription,
	...subscriptionPauseDescription,
	...subscriptionResumeDescription,
	...subscriptionRevokeTrialDescription,
	...subscriptionExtendTrialDescription,
	...subscriptionCancelDescription,
];

