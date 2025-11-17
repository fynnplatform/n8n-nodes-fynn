import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class FynnApi implements ICredentialType {
	name = 'fynnApi';

	displayName = 'Fynn API';

	icon: Icon = { light: 'file:fynn.svg', dark: 'file:fynn.dark.svg' };

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-fynn?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Tenant Name',
			name: 'tenantName',
			type: 'string',
			required: true,
			default: '',
			description: 'Your Fynn tenant name (used to build the API URL)',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'API key used as Bearer token',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '=https://{{$credentials.tenantName}}.coreapi.io',
			url: '/available-webhook-events',
		},
	};
}
