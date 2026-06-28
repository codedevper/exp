## List Application Passwords
GET /wp/v2/application-passwords

Retrieve a list of application passwords for the authenticated user. Authentication via Basic Auth or cookie is required.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/application-passwords \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic $(echo -n 'username:application_passwords' | base64)"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made; determines fields in response. Options: `view`, `embed`, `edit`. Default: `view`. Note: `edit` context is required to see the full password details. |

## Response
```json
[
  {
    "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "app_id": "my-custom-app",
    "name": "My Custom App",
    "created": "2024-12-01T12:00:00",
    "last_used": "2024-12-15T10:30:00",
    "last_ip": "192.168.1.100",
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wp/v2/application-passwords/a1b2c3d4-e5f6-7890-abcd-ef1234567890"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/wp/v2/application-passwords"
        }
      ]
    }
  }
]
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| uuid | string | UUID that identifies the application password. |
| app_id | string | Application identifier. |
| name | string | User-defined name for the application password. |
| created | string | ISO 8601 date when the application password was created. |
| last_used | string | ISO 8601 date when the application password was last used. |
| last_ip | string | IP address of the last request using this application password. |
| _links | object | HATEOAS links to related resources. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_forbidden | You do not have permission to list application passwords. |
| rest_invalid_param | Invalid parameter(s) passed. |

> **Note:** Authentication must be done via Basic Auth with the application password as the password, or via a WordPress cookie (nonce). Bearer tokens alone will not work for this endpoint.
