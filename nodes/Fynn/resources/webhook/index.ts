import type { INodeProperties } from 'n8n-workflow';

export const webhookDescription: INodeProperties[] = [
	{
		displayName: 'Event',
		name: 'event',
		type: 'options',
		required: true,
		noDataExpression: true,
		options: [
			// Produkt
			{
				name: 'Product Created',
				value: 'product.created',
				description: 'Triggered when a product is created',
			},
			{
				name: 'Product Updated',
				value: 'product.updated',
				description: 'Triggered when a product is updated',
			},
			{
				name: 'Product Deleted',
				value: 'product.deleted',
				description: 'Triggered when a product is deleted',
			},
			{
				name: 'Product Archived',
				value: 'product.archived',
				description: 'Triggered when a product is archived',
			},
			// Rabattcodes
			{
				name: 'Coupon Created',
				value: 'coupon.created',
				description: 'Triggered when a coupon is created',
			},
			{
				name: 'Coupon Updated',
				value: 'coupon.updated',
				description: 'Triggered when a coupon is updated',
			},
			{
				name: 'Coupon Deleted',
				value: 'coupon.deleted',
				description: 'Triggered when a coupon is deleted',
			},
			{
				name: 'Coupon Toggled',
				value: 'coupon.toggled',
				description: 'Triggered when a coupon is toggled',
			},
			// Kunden
			{
				name: 'Customer Created',
				value: 'customer.created',
				description: 'Triggered when a customer is created',
			},
			{
				name: 'Customer Updated',
				value: 'customer.updated',
				description: 'Triggered when a customer is updated',
			},
			{
				name: 'Customer Archived',
				value: 'customer.archived',
				description: 'Triggered when a customer is archived',
			},
			{
				name: 'Customer Unarchived',
				value: 'customer.unarchived',
				description: 'Triggered when a customer is unarchived',
			},
			{
				name: 'Customer Deleted',
				value: 'customer.deleted',
				description: 'Triggered when a customer is deleted',
			},
			{
				name: 'Payment Method Created',
				value: 'payment_method.created',
				description: 'Triggered when a payment method is created',
			},
			{
				name: 'Payment Method Updated',
				value: 'payment_method.updated',
				description: 'Triggered when a payment method is updated',
			},
			// Rechnungen
			{
				name: 'Invoice Created',
				value: 'invoice.created',
				description: 'Triggered when an invoice is created',
			},
			{
				name: 'Invoice Finalized',
				value: 'invoice.finalized',
				description: 'Triggered when an invoice is finalized',
			},
			{
				name: 'Invoice Credited',
				value: 'invoice.credited',
				description: 'Triggered when an invoice is credited',
			},
			{
				name: 'Invoice Updated',
				value: 'invoice.updated',
				description: 'Triggered when an invoice is updated',
			},
			{
				name: 'Invoice Refunded',
				value: 'invoice.refunded',
				description: 'Triggered when an invoice is refunded',
			},
			{
				name: 'Invoice Canceled',
				value: 'invoice.canceled',
				description: 'Triggered when an invoice is canceled',
			},
			{
				name: 'Invoice Paid',
				value: 'invoice.paid',
				description: 'Triggered when an invoice is paid',
			},
			{
				name: 'Invoice Closed',
				value: 'invoice.closed',
				description: 'Triggered when an invoice is closed',
			},
			{
				name: 'Invoice Unpaid',
				value: 'invoice.unpaid',
				description: 'Triggered when an invoice becomes unpaid',
			},
			{
				name: 'Invoice Remindered',
				value: 'invoice.remindered',
				description: 'Triggered when an invoice reminder is sent',
			},
			{
				name: 'Invoice Requires Approval',
				value: 'invoice.requires_approval',
				description: 'Triggered when an invoice requires approval',
			},
			{
				name: 'Invoice Payment Method Updated',
				value: 'invoice.payment_method.updated',
				description: 'Triggered when an invoice payment method is updated',
			},
			// Preispläne
			{
				name: 'Price Plan Archived',
				value: 'price_plan.archived',
				description: 'Triggered when a price plan is archived',
			},
			// Abonnements
			{
				name: 'Subscription Activated',
				value: 'subscription.activated',
				description: 'Triggered when a subscription is activated',
			},
			{
				name: 'Subscription Billed',
				value: 'subscription.billed',
				description: 'Triggered when a subscription is billed',
			},
			{
				name: 'Subscription Created',
				value: 'subscription.created',
				description: 'Triggered when a subscription is created',
			},
			{
				name: 'Subscription Changed',
				value: 'subscription.changed',
				description: 'Triggered when a subscription is changed',
			},
			{
				name: 'Subscription Invoice Address Updated',
				value: 'subscription.invoice_address.updated',
				description: 'Triggered when a subscription invoice address is updated',
			},
			{
				name: 'Subscription Delivery Address Updated',
				value: 'subscription.delivery_address.updated',
				description: 'Triggered when a subscription delivery address is updated',
			},
			{
				name: 'Subscription Payment Method Updated',
				value: 'subscription.payment_method.updated',
				description: 'Triggered when a subscription payment method is updated',
			},
			{
				name: 'Subscription Item Instant Metered',
				value: 'subscription.item.instant_metered',
				description: 'Triggered when a subscription item instant metered event occurs',
			},
			{
				name: 'Subscription Item Metered',
				value: 'subscription.item.metered',
				description: 'Triggered when a subscription item metered event occurs',
			},
			{
				name: 'Subscription Item Quantity Changed',
				value: 'subscription.item.quantity_changed',
				description: 'Triggered when a subscription item quantity is changed',
			},
			{
				name: 'Subscription Products Ordered',
				value: 'subscription.products.ordered',
				description: 'Triggered when subscription products are ordered',
			},
			{
				name: 'Subscription Trial Expired',
				value: 'subscription.trial_expired',
				description: 'Triggered when a subscription trial expires',
			},
			{
				name: 'Subscription Trial Extended',
				value: 'subscription.trial_extended',
				description: 'Triggered when a subscription trial is extended',
			},
			{
				name: 'Subscription Updated',
				value: 'subscription.updated',
				description: 'Triggered when a subscription is updated',
			},
			{
				name: 'Subscription Paused',
				value: 'subscription.paused',
				description: 'Triggered when a subscription is paused',
			},
			{
				name: 'Subscription Resumed',
				value: 'subscription.resumed',
				description: 'Triggered when a subscription is resumed',
			},
			{
				name: 'Subscription Canceled',
				value: 'subscription.canceled',
				description: 'Triggered when a subscription is canceled',
			},
			{
				name: 'Subscription Cancellation Revoked',
				value: 'subscription.cancellation_revoked',
				description: 'Triggered when a subscription cancellation is revoked',
			},
			{
				name: 'Subscription Terminated',
				value: 'subscription.terminated',
				description: 'Triggered when a subscription is terminated',
			},
			{
				name: 'Subscription Item Terminated',
				value: 'subscription_item.terminated',
				description: 'Triggered when a subscription item is terminated',
			},
			// Mahnwesen
			{
				name: 'Dunning Document Created',
				value: 'dunning_document.created',
				description: 'Triggered when a dunning document is created',
			},
			{
				name: 'Dunning Document Paid',
				value: 'dunning_document.paid',
				description: 'Triggered when a dunning document is paid',
			},
			{
				name: 'Dunning Document Canceled',
				value: 'dunning_document.canceled',
				description: 'Triggered when a dunning document is canceled',
			},
			// Warenkorb
			{
				name: 'Cart Completed',
				value: 'cart.completed',
				description: 'Triggered when a cart is completed',
			},
			{
				name: 'Cart Paid',
				value: 'cart.paid',
				description: 'Triggered when a cart is paid',
			},
			// Features & Entitlements
			{
				name: 'Feature Created',
				value: 'feature.created',
				description: 'Triggered when a feature is created',
			},
			{
				name: 'Feature Activated',
				value: 'feature.activated',
				description: 'Triggered when a feature is activated',
			},
			{
				name: 'Feature Archived',
				value: 'feature.archived',
				description: 'Triggered when a feature is archived',
			},
			{
				name: 'Entitlement State Updated',
				value: 'entitlement.state.updated',
				description: 'Triggered when an entitlement state is updated',
			},
		],
		default: 'customer.created',
		description: 'The Fynn event to listen for',
	},
	{
		displayName: 'Webhook Secret',
		name: 'webhookSecret',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',
		description:
			'The webhook secret to validate the signature. You can find this in Fynn Settings → Webhooks → Details',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		options: [
			{
				displayName: 'Auto Register Webhook',
				name: 'autoRegister',
				type: 'boolean',
				default: true,
				description:
					'Whether to automatically register the webhook with Fynn when the workflow is activated',
			},
		],
	},
];

