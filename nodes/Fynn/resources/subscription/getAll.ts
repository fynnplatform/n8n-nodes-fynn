import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSubscriptionGetMany = {
	operation: ['getAll'],
	resource: ['subscription'],
};

export const subscriptionGetManyDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForSubscriptionGetMany,
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
				...showOnlyForSubscriptionGetMany,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 30,
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
				...showOnlyForSubscriptionGetMany,
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
			show: showOnlyForSubscriptionGetMany,
		},
		options: [
			{
				displayName: 'Customer',
				name: 'customer',
				type: 'string',
				default: '',
				description: 'Filter by customer ID',
				placeholder: '00000000-0000-0000-0000-000000000000',
				routing: {
					send: {
						type: 'query',
						property: 'customer',
					},
				},
			},
			{
				displayName: 'Subscription ID',
				name: 'id',
				type: 'string',
				default: '',
				description: 'Filter by subscription ID',
				placeholder: '00000000-0000-0000-0000-000000000000',
				routing: {
					send: {
						type: 'query',
						property: 'id',
					},
				},
			},
			{
				displayName: 'Subscription Number',
				name: 'number',
				type: 'string',
				default: '',
				description: 'Filter by subscription number',
				placeholder: 'S-00000001',
				routing: {
					send: {
						type: 'query',
						property: 'number',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Draft',
						value: 'draft',
					},
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Paused',
						value: 'paused',
					},
					{
						name: 'Cancelled',
						value: 'cancelled',
					},
					{
						name: 'Terminated',
						value: 'terminated',
					},
					{
						name: 'Offer',
						value: 'offer',
					},
				],
				default: '',
				description: 'Filter by subscription status',
				routing: {
					send: {
						type: 'query',
						property: 'status',
					},
				},
			},
			{
				displayName: 'Payment Method Type',
				name: 'paymentMethod.type',
				type: 'string',
				default: '',
				description: 'Filter by payment method type',
				routing: {
					send: {
						type: 'query',
						property: 'paymentMethod.type',
					},
				},
			},
			{
				displayName: 'Product ID',
				name: 'items.product.id',
				type: 'string',
				default: '',
				description: 'Filter by product ID',
				placeholder: '00000000-0000-0000-0000-000000000000',
				routing: {
					send: {
						type: 'query',
						property: 'items.product.id',
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
		],
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'collection',
		placeholder: 'Add Sort Option',
		default: {},
		displayOptions: {
			show: showOnlyForSubscriptionGetMany,
		},
		options: [
			{
				displayName: 'Status',
				name: 'order[status]',
				type: 'options',
				options: [
					{
						name: 'Ascending',
						value: 'asc',
					},
					{
						name: 'Descending',
						value: 'desc',
					},
				],
				default: '',
				description: 'Sort by status',
				routing: {
					send: {
						type: 'query',
						property: 'order[status]',
					},
				},
			},
			{
				displayName: 'Created At',
				name: 'order[createdAt]',
				type: 'options',
				options: [
					{
						name: 'Ascending',
						value: 'asc',
					},
					{
						name: 'Descending',
						value: 'desc',
					},
				],
				default: '',
				description: 'Sort by creation date',
				routing: {
					send: {
						type: 'query',
						property: 'order[createdAt]',
					},
				},
			},
			{
				displayName: 'Activated At',
				name: 'order[activatedAt]',
				type: 'options',
				options: [
					{
						name: 'Ascending',
						value: 'asc',
					},
					{
						name: 'Descending',
						value: 'desc',
					},
				],
				default: '',
				description: 'Sort by activation date',
				routing: {
					send: {
						type: 'query',
						property: 'order[activatedAt]',
					},
				},
			},
			{
				displayName: 'Trial Ends On',
				name: 'order[trialEndsOn]',
				type: 'options',
				options: [
					{
						name: 'Ascending',
						value: 'asc',
					},
					{
						name: 'Descending',
						value: 'desc',
					},
				],
				default: '',
				description: 'Sort by trial end date',
				routing: {
					send: {
						type: 'query',
						property: 'order[trialEndsOn]',
					},
				},
			},
			{
				displayName: 'Contract End',
				name: 'order[contractDetails.contractEnd]',
				type: 'options',
				options: [
					{
						name: 'Ascending',
						value: 'asc',
					},
					{
						name: 'Descending',
						value: 'desc',
					},
				],
				default: '',
				description: 'Sort by contract end date',
				routing: {
					send: {
						type: 'query',
						property: 'order[contractDetails.contractEnd]',
					},
				},
			},
		],
	},
];

