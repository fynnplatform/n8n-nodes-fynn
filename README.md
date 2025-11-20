# n8n-nodes-fynn

This is an n8n community node that provides integration with the Fynn API. Fynn is a subscription management platform that helps businesses manage recurring billing, subscriptions, and customer relationships.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

You can install this node directly from the n8n UI by searching for "Fynn" in the community nodes section, or manually via npm:

```bash
npm install n8n-nodes-fynn
```

## Operations

This node provides two main components:

### Fynn Node (Actions)

The Fynn node allows you to interact with the Fynn API to manage customers, subscriptions, and invoices.

#### Customer Operations

- **Create**: Create a new customer in Fynn
- **Find**: Search for a customer by ID or external ID
- **Get Many**: Retrieve multiple customers with filtering and pagination
- **Update**: Update an existing customer's information
- **Delete**: Delete a customer from Fynn
- **Archive**: Archive a customer (soft delete)
- **Update Payment Method**: Update the payment method for a customer
- **Request OTP**: Request a one-time password for customer authentication

#### Subscription Operations

- **Find**: Search for a subscription by ID
- **Get Many**: Retrieve multiple subscriptions with filtering and pagination
- **Cancel**: Cancel a subscription (stops billing after cancellation date)
- **Pause**: Pause a subscription (stops billing immediately)
- **Resume**: Resume a paused subscription (starts billing again)
- **Extend Trial**: Extend the trial period of a subscription
- **Revoke Trial**: Revoke the trial period and start billing immediately
- **Update Payment Method**: Update the payment method for a subscription
- **Update Invoice Address**: Update the invoice address for a subscription

#### Invoice Operations

- **Find**: Search for an invoice by ID

### Fynn Trigger Node (Webhooks)

The Fynn Trigger node allows you to receive webhook events from Fynn to start your workflows automatically. It supports a wide range of events including:

- **Cart Events**: `cart.completed`, `cart.paid`
- **Coupon Events**: `coupon.created`, `coupon.deleted`, `coupon.toggled`, `coupon.updated`
- **Customer Events**: `customer.created`, `customer.updated`, `customer.archived`, `customer.unarchived`, `customer.deleted`
- **Invoice Events**: `invoice.created`, `invoice.finalized`, `invoice.paid`, `invoice.canceled`, `invoice.closed`, `invoice.credited`, `invoice.refunded`, `invoice.remindered`, `invoice.requires_approval`, `invoice.payment_method.updated`
- **Subscription Events**: `subscription.created`, `subscription.updated`, `subscription.canceled`, `subscription.renewed`, `subscription.trial_started`, `subscription.trial_ended`, `subscription.paused`, `subscription.resumed`, `subscription.payment_method.updated`
- **Dunning Document Events**: `dunning_document.created`, `dunning_document.paid`, `dunning_document.canceled`
- **Feature Events**: `feature.created`, `feature.activated`, `feature.archived`
- **Entitlement Events**: `entitlement.state.updated`

And many more. The trigger node automatically registers and manages webhooks with Fynn, and includes optional webhook signature validation for security.

## Credentials

To use this node, you need to create Fynn API credentials in n8n:

1. In n8n, go to **Credentials** → **Add Credential**
2. Search for **Fynn API** and select it
3. Fill in the following fields:
   - **Tenant Name**: Your Fynn tenant name (used to build the API URL: `https://{tenantName}.coreapi.io`)
   - **Access Token**: Your Fynn API access token (used as Bearer token for authentication)

### Prerequisites

- A Fynn account with API access
- An API access token from your Fynn dashboard

The credentials will be tested automatically when you save them to ensure they are valid.

## Compatibility

- **Minimum n8n version**: 1.0.0
- **Tested with n8n versions**: 1.0.0 and above
- **Node.js version**: Compatible with Node.js 18.x and above

## Usage

### Basic Example: Create a Customer

1. Add a **Fynn** node to your workflow
2. Select **Customer** as the resource
3. Choose **Create** as the operation
4. Fill in the customer details (name, email, etc.)
5. Connect your Fynn API credentials
6. Execute the workflow

### Webhook Example: Trigger on Customer Creation

1. Add a **Fynn Trigger** node to your workflow
2. Select the event (e.g., `customer.created`)
3. Optionally configure webhook secret for signature validation
4. Connect your Fynn API credentials
5. The workflow will automatically start when a customer is created in Fynn

### Advanced: Update Subscription Payment Method

1. Add a **Fynn** node to your workflow
2. Select **Subscription** as the resource
3. Choose **Update Payment Method** as the operation
4. Provide the subscription ID and new payment method details
5. Execute the workflow

For more examples and use cases, refer to the [n8n documentation](https://docs.n8n.io/try-it-out/) and the [Fynn API documentation](https://fynn.eu).

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Fynn Website](https://fynn.eu)
* [Fynn API Documentation](https://fynn.eu/docs)
* [n8n Documentation](https://docs.n8n.io/)

## Version history

### 0.2.2 (2025-11-20)

- **Added**: Neue Subscription-Operationen für erweiterte Abonnement-Verwaltung:
  - **Get Many**: Mehrere Abonnements mit Filterung und Paginierung abrufenpac
  - Alle bestehenden Subscription-Operationen wurden erweitert und verbessert (Cancel, Extend Trial, Find, Pause, Resume, Revoke Trial, Update Invoice Address, Update Payment Method)

### 0.1.0

- Initial release
- Support for Customer operations (Create, Find, Get Many, Update, Delete, Archive, Update Payment Method, Request OTP)
- Support for Subscription operations (Find, Cancel, Pause, Resume, Extend Trial, Revoke Trial, Update Payment Method, Update Invoice Address)
- Support for Invoice operations (Find)
- Fynn Trigger node with webhook support for all Fynn events
- Automatic webhook registration and management
- Webhook signature validation support
