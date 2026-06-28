## Update an Application Password
PUT /wp/v2/application-passwords/<uuid>

Update an existing application password's metadata. The password itself cannot be changed.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/application-passwords/a1b2c3d4-e5f6-7890-abcd-ef1234567890 \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic $(echo -n 'username:your_app_password' | base64)" \
  -d '{
    "name": "My Renamed App"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| uuid | string | **Required.** The UUID of the application password to update. |
| name | string | The new name for the application password. |
| app_id | string | The new application identifier. |

## Response
```json
{
  "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "app_id": "my-custom-app",
  "name": "My Renamed App",
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
| rest_application_password_invalid_uuid | Invalid application password UUID. |
| rest_invalid_param | Invalid parameter(s) passed. |
| rest_forbidden | You do not have permission to update this application password. |
