import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomerGetMany = {
	operation: ['getAll'],
	resource: ['customer'],
};

export const customerGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForCustomerGetMany,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
			},
			operations: {
				pagination: {
					type: 'offset',
					properties: {
						limitParameter: 'limit',
						offsetParameter: 'page',
						pageSize: 100,
						type: 'query',
						rootProperty: 'data',
					},
				},
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForCustomerGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
		description: 'Max number of results to return',
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForCustomerGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 1,
		routing: {
			send: {
				type: 'query',
				property: 'page',
			},
		},
		description: 'The collection page number',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: showOnlyForCustomerGetMany,
		},
		options: [
			{
				displayName: 'Company Name',
				name: 'companyName',
				type: 'string',
				default: '',
				description: 'Filter by company name',
				routing: {
					send: {
						type: 'query',
						property: 'companyName',
					},
				},
			},
			{
				displayName: 'Customer Group Name',
				name: 'customerGroup.name',
				type: 'string',
				default: '',
				description: 'Filter by customer group name',
				routing: {
					send: {
						type: 'query',
						property: 'customerGroup.name',
					},
				},
			},
			{
				displayName: 'Customer Number',
				name: 'customerNumber',
				type: 'string',
				default: '',
				description: 'Filter by customer number',
				routing: {
					send: {
						type: 'query',
						property: 'customerNumber',
					},
				},
			},
			{
				displayName: 'Datev ID',
				name: 'datevId',
				type: 'string',
				default: '',
				description: 'Filter by Datev ID',
				routing: {
					send: {
						type: 'query',
						property: 'datevId',
					},
				},
			},
			{
				displayName: 'Email',
				name: 'emailAddresses.email',
				type: 'string',
				default: '',
				description: 'Filter by email address',
				placeholder: 'max@fynndemo.com',
				routing: {
					send: {
						type: 'query',
						property: 'emailAddresses.email',
					},
				},
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'Filter by first name',
				routing: {
					send: {
						type: 'query',
						property: 'firstName',
					},
				},
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Filter by last name',
				routing: {
					send: {
						type: 'query',
						property: 'lastName',
					},
				},
			},
			{
				displayName: 'Partner',
				name: 'partner',
				type: 'string',
				default: '',
				description: 'Filter by partner',
				routing: {
					send: {
						type: 'query',
						property: 'partner',
					},
				},
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search term',
				routing: {
					send: {
						type: 'query',
						property: 'search',
					},
				},
			},
			{
				displayName: 'VAT ID',
				name: 'vatId',
				type: 'string',
				default: '',
				description: 'Filter by VAT ID',
				routing: {
					send: {
						type: 'query',
						property: 'vatId',
					},
				},
			},
			{
				displayName: 'VAT ID Valid',
				name: 'isVatIdValid',
				type: 'boolean',
				default: false,
				description: 'Whether to filter by VAT ID validation status',
				routing: {
					send: {
						type: 'query',
						property: 'isVatIdValid',
					},
				},
			},
		],
	},
];

