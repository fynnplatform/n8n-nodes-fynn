import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerUpdate = {
	operation: ['update'],
	resource: ['customer'],
};

export const customerUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: { show: showOnlyForCustomerUpdate },
		default: '',
		required: true,
		description: 'The customer ID (UUID) to update',
		placeholder: '00000000-0000-0000-0000-000000000000',
		typeOptions: {
			pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
		},
	},
	{
		displayName: 'Country Code',
		name: 'countryCode',
		type: 'string',
		displayOptions: { show: showOnlyForCustomerUpdate },
		default: 'DE',
		required: true,
		description: 'Country code (required)',
		routing: {
			send: {
				type: 'body',
				property: 'countryCode',
			},
		},
	},
	{
		displayName: 'Time Zone',
		name: 'timeZone',
		type: 'string',
		displayOptions: { show: showOnlyForCustomerUpdate },
		default: 'Europe/Berlin',
		required: true,
		description: 'The timezone of the customer. This is used for the communication with the customer or on generating documents like invoices, reminders, etc. (required)',
		routing: {
			send: {
				type: 'body',
				property: 'timeZone',
			},
		},
	},
	{
		displayName: 'Language',
		name: 'language',
		type: 'options',
		displayOptions: { show: showOnlyForCustomerUpdate },
		default: 'de',
		required: true,
		description: 'The language of the customer. This is used for the communication with the customer or on generating documents like invoices, reminders, etc. (required)',
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForCustomerUpdate,
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
				displayName: 'Tax Exempt',
				name: 'taxExempt',
				type: 'options',
				default: 'auto',
				description: 'The tax exemption status of the customer. Possible values: exempt (never charged with taxes), auto (charged based on country and vat id status)',
				options: [
					{
						name: 'Auto',
						value: 'auto',
						description: 'The customer will be charged with taxes based on their country and vat id status',
					},
					{
						name: 'Exempt',
						value: 'exempt',
						description: 'The customer will never be charged with taxes',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'taxExempt',
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
			{
				displayName: 'Custom Fields',
				name: 'customFields',
				type: 'json',
				default: '{}',
				description: 'Custom fields for the entity. The keys are the field names and the values are the field values. They need to be configured under "/custom-fields" in the API documentation.',
				placeholder: '{"field1": "value1", "field2": "value2"}',
				routing: {
					send: {
						type: 'body',
						property: 'customFields',
					},
				},
			},
		],
	},
];

