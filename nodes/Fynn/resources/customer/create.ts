import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerCreate = {
	operation: ['create'],
	resource: ['customer'],
};

export const customerCreateDescription: INodeProperties[] = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		displayOptions: {
			show: showOnlyForCustomerCreate,
		},
		default: '',
		required: true,
		description: 'The email address used for e-mail communication. This is also the username for the customer login. This needs to be unique.',
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
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForCustomerCreate,
		},
		options: [
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'Can be empty if the customer is a company',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'firstName',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Can be empty if the customer is a company',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'lastName',
					},
				},
			},
			{
				displayName: 'Company Name',
				name: 'companyName',
				type: 'string',
				default: '',
				description: 'Company name',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'companyName',
					},
				},
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'phone',
					},
				},
			},
			{
				displayName: 'Customer Number',
				name: 'customerNumber',
				type: 'string',
				default: '',
				description: 'Can be empty. In this case the customer number is generated automatically.',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'customerNumber',
					},
				},
			},
			{
				displayName: 'Country Code',
				name: 'countryCode',
				type: 'string',
				default: 'DE',
				description: 'Country code (default: DE)',
				routing: {
					send: {
						type: 'body',
						property: 'countryCode',
					},
				},
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'options',
				default: 'de',
				description: 'The language of the customer. This is used for the communication with the customer or on generating documents like invoices, reminders, etc.',
				options: [
					{
						name: 'German',
						value: 'de',
					},
					{
						name: 'English',
						value: 'en',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'language',
					},
				},
			},
			{
				displayName: 'Time Zone',
				name: 'timeZone',
				type: 'string',
				default: 'Europe/Berlin',
				description: 'The timezone of the customer. This is used for the communication with the customer or on generating documents like invoices, reminders, etc.',
				routing: {
					send: {
						type: 'body',
						property: 'timeZone',
					},
				},
			},
			{
				displayName: 'Currency Code',
				name: 'currencyCode',
				type: 'string',
				default: '',
				description: 'Can be empty. In this case the default currency of the tenant is used.',
				routing: {
					send: {
						type: 'body',
						property: 'currencyCode',
					},
				},
			},
			{
				displayName: 'Invoice Email',
				name: 'invoiceEmail',
				type: 'string',
				default: '',
				description: 'This email will be used for sending invoices to the customer. If not provided, we use the default e-mail address.',
				typeOptions: {
					validateOnBlur: true,
				},
				routing: {
					send: {
						type: 'body',
						property: 'invoiceEmail',
					},
				},
			},
			{
				displayName: 'Gender',
				name: 'gender',
				type: 'options',
				default: '',
				description: 'This field is needed, to fulfill a collection process on a personal customer.',
				options: [
					{
						name: 'Male',
						value: 'male',
					},
					{
						name: 'Female',
						value: 'female',
					},
					{
						name: 'Diverse',
						value: 'diverse',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'gender',
					},
				},
			},
			{
				displayName: 'VAT ID',
				name: 'vatId',
				type: 'string',
				default: '',
				description: 'VAT ID',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'vatId',
					},
				},
			},
			{
				displayName: 'Datev ID',
				name: 'datevId',
				type: 'string',
				default: '',
				description: 'The ID of the customer in DATEV. If not provided, we will generate a datev id, when the "accounting.useDebitorAccounts" setting is set to true.',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'datevId',
					},
				},
			},
			{
				displayName: 'Commercial Register Name',
				name: 'commercialRegisterName',
				type: 'string',
				default: '',
				description: 'The name of the commercial register. This is needed to fulfill the collection processes on companies.',
				routing: {
					send: {
						type: 'body',
						property: 'commercialRegisterName',
					},
				},
			},
			{
				displayName: 'Commercial Register Number',
				name: 'commercialRegisterNumber',
				type: 'string',
				default: '',
				description: 'The ID of the customer in the commercial register, e.g. HRB 123456. This is needed to fulfill the collection processes on companies.',
				routing: {
					send: {
						type: 'body',
						property: 'commercialRegisterNumber',
					},
				},
			},
			{
				displayName: 'Street',
				name: 'street',
				type: 'string',
				default: '',
				description: 'The street of the customer. If not provided, we will use empty string.',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'street',
					},
				},
			},
			{
				displayName: 'House Number',
				name: 'houseNumber',
				type: 'string',
				default: '',
				description: 'The house number of the customer. If not provided, we will use empty string.',
				typeOptions: {
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'houseNumber',
					},
				},
			},
			{
				displayName: 'ZIP Code',
				name: 'zip',
				type: 'string',
				default: '',
				description: 'The zip code of the customer. If not provided, we will use empty string.',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'zip',
					},
				},
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'The city of the customer. If not provided, we will use empty string.',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'city',
					},
				},
			},
			{
				displayName: 'Address Addition',
				name: 'addition',
				type: 'string',
				default: '',
				description: 'Additional address line of the customer. If not provided, we will use empty string.',
				typeOptions: {
					minLength: 2,
					maxLength: 255,
				},
				routing: {
					send: {
						type: 'body',
						property: 'addition',
					},
				},
			},
			{
				displayName: 'Customer Group ID',
				name: 'customerGroup',
				type: 'string',
				default: '',
				description: 'The customer group of the customer (UUID)',
				placeholder: '00000000-0000-0000-0000-000000000000',
				typeOptions: {
					pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
				},
				routing: {
					send: {
						type: 'body',
						property: 'customerGroup',
					},
				},
			},
			{
				displayName: 'Contact Person ID',
				name: 'contactPerson',
				type: 'string',
				default: '',
				description: 'The contact person of the customer (UUID)',
				placeholder: '00000000-0000-0000-0000-000000000000',
				typeOptions: {
					pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
				},
				routing: {
					send: {
						type: 'body',
						property: 'contactPerson',
					},
				},
			},
		],
	},
];

