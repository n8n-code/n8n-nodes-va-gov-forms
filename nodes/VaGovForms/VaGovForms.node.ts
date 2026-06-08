import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { formsDescription } from './resources/forms';

export class VaGovForms implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'va-gov-forms',
		name: 'N8nDevVaGovForms',
		icon: { light: 'file:./va-gov-forms.png', dark: 'file:./va-gov-forms.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Use the VA Forms API to search for VA forms, get the form\'s PDF link and metadata, and check for new versions',
		defaults: { name: 'va-gov-forms' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVaGovFormsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Forms",
					"value": "Forms",
					"description": ""
				}
			],
			"default": ""
		},
		...formsDescription
		],
	};
}
