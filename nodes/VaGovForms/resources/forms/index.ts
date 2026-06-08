import type { INodeProperties } from 'n8n-workflow';

export const formsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Forms"
					]
				}
			},
			"options": [
				{
					"name": "Find Forms",
					"value": "Find Forms",
					"action": "Returns all VA Forms and their last revision date",
					"description": "Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/forms"
						}
					}
				},
				{
					"name": "Find Form By Form Name",
					"value": "Find Form By Form Name",
					"action": "Find form by form name",
					"description": "Returns a single form and the full revision history",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/forms/{{$parameter[\"form_name\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /forms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Forms"
					],
					"operation": [
						"Find Forms"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"description": "Returns form data based on entered form name.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Forms"
					],
					"operation": [
						"Find Forms"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apikey (header: apikey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apikey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Forms"
					],
					"operation": [
						"Find Forms"
					]
				}
			}
		},
		{
			"displayName": "GET /forms/{form_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Forms"
					],
					"operation": [
						"Find Form By Form Name"
					]
				}
			}
		},
		{
			"displayName": "Form Name",
			"name": "form_name",
			"required": true,
			"description": "The VA form_name of the form being requested. The exact form name must be passed, including proper placement of prefixes and/or hyphens.",
			"default": "10-10EZ",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Forms"
					],
					"operation": [
						"Find Form By Form Name"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apikey (header: apikey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apikey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Forms"
					],
					"operation": [
						"Find Form By Form Name"
					]
				}
			}
		},
];
