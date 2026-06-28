## Create an Application Password
POST /wp/v2/application-passwords

Create a new application password for the authenticated user. The generated password is returned in plaintext in the response and will only be shown once.

## Example Request
```bash
curl -X POST https://example.com/wp-json/wp/v2/application-passwords \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic $(echo -n 'username:your_app_password' | base64)" \
  -d '{
    "name": "My CLI Tool"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| name | string | **Required.** The name of the application password. |
| app_id | string | A unique identifier for the application. |
| meta | object | Meta fields registered for the application password. |

## Response
```json
{
  "uuid": "b2c3d4e5-f6a7-8901-bcde-f23456789012",
  "app_id": "",
  "name": "My CLI Tool",
  "password": "abcd efgh ijkl mnop qrst uvwx",
  "created": "2024-12-20T14:00:00",
  "last_used": null,
  "last_ip": null,
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wp/v2/application-passwords/b2c3d4e5-f6a7-8901-bcde-f23456789012"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/wp/v2/application-passwords"
      }
    ]
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| uuid | string | UUID that identifies the application password. |
| app_id | string | Application identifier. |
| name | string | User-defined name for the application password. |
| password | string | The generated application password in plaintext. **Only shown once upon creation.** |
| created | string | ISO 8601 date when the application password was created. |
| last_used | string | ISO 8601 date when the application password was last used (null if never used). |
| last_ip | string | IP address of the last request (null if never used). |
| _links | object | HATEOAS links to related resources. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_invalid_param | Invalid parameter(s) passed. |
| rest_forbidden | You do not have permission to create application passwords. |

> **Note:** The `password` field is only returned in the response to this create request. It cannot be retrieved again later. Store it securely.
