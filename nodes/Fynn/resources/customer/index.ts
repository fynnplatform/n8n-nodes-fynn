import type { INodeProperties } from 'n8n-workflow';
import { customerArchiveDescription } from './archive';
import { customerCreateDescription } from './create';
import { customerDeleteDescription } from './delete';
import { customerUpdateDescription } from './update';
import { customerUpdatePaymentMethodDescription } from './updatePaymentMethod';
import { customerFindDescription } from './find';
import { customerGetManyDescription } from './getAll';
import { customerRequestOtpDescription } from './requestOtp';

const showOnlyForCustomers = {
	resource: ['customer'],
};

export const customerDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCustomers,
		},
		options: [
			{
				name: 'Archive',
				value: 'archive',
				action: 'Archive a customer',
				description: 'Archive an existing customer',
				routing: {
					request: {
						method: 'PUT',
						url: '=/customers/{{$parameter.customerId}}/archive',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a customer',
				description: 'Create a new customer',
				routing: {
					request: {
						method: 'POST',
						url: '/customers',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a customer',
				description: 'Delete an existing customer',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/customers/{{$parameter.customerId}}',
					},
				},
			},
			{
				name: 'Find',
				value: 'find',
				action: 'Find a customer',
				description: 'Search for customer by ID or external ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/customers/{{$parameter.customerId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many customers',
				description: 'Get many customers with filtering and pagination',
				routing: {
					request: {
						method: 'GET',
						url: '/customers',
					},
				},
			},
			{
				name: 'Request OTP',
				value: 'requestOtp',
				action: 'Request a one time token for a customer',
				description: 'Request a one time token for a customer',
				routing: {
					request: {
						method: 'POST',
						url: '/public/customer/request-otp',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a customer',
				description: 'Update an existing customer',
				routing: {
					request: {
						method: 'PUT',
						url: '=/customers/{{$parameter.customerId}}',
					},
				},
			},
			{
				name: 'Update Payment Method',
				value: 'updatePaymentMethod',
				action: 'Update customer payment method',
				description: 'Update customers payment method',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/customers/{{$parameter.customerId}}/payment-method',
					},
				},
			},
		],
		default: 'find',
	},
		...customerFindDescription,
		...customerGetManyDescription,
		...customerCreateDescription,
		...customerUpdateDescription,
		...customerDeleteDescription,
		...customerArchiveDescription,
		...customerUpdatePaymentMethodDescription,
		...customerRequestOtpDescription,
	];

