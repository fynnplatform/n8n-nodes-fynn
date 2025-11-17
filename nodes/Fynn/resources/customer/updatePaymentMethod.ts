import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerUpdatePaymentMethod = {
	operation: ['updatePaymentMethod'],
	resource: ['customer'],
};

export const customerUpdatePaymentMethodDescription: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: { show: showOnlyForCustomerUpdatePaymentMethod },
		default: '',
		required: true,
		description: 'The customer ID (UUID) to update payment method for',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
	{
		displayName: 'Payment Method ID',
		name: 'paymentMethodId',
		type: 'string',
		displayOptions: { show: showOnlyForCustomerUpdatePaymentMethod },
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

