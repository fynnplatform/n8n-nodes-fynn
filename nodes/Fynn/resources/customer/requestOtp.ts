import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerRequestOtp = {
	operation: ['requestOtp'],
	resource: ['customer'],
};

export const customerRequestOtpDescription: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		displayOptions: { show: showOnlyForCustomerRequestOtp },
		default: '',
		required: true,
		description: 'The email of the customer',
		placeholder: 'jsmith@example.com',
		typeOptions: {
			validateOnBlur: true,
		},
		routing: {
			send: {
				type: 'body',
				property: 'email',
			},
		},
	},
];

