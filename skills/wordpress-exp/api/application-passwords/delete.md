## Delete an Application Password
DELETE /wp/v2/application-passwords/<uuid>

Delete a single application password by its UUID. This immediately revokes the password.

## Example Request
```bash
curl -X DELETE https://example.com/wp-json/wp/v2/application-passwords/a1b2c3d4-e5f6-7890-abcd-ef1234567890 \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic $(echo -n 'username:your_app_password' | base64)"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| uuid | string | **Required.** The UUID of the application password to delete. |

## Response
```json
{
  "deleted": true,
  "previous": {
    "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "app_id": "my-custom-app",
    "name": "My Custom App",
    "created": "2024-12-01T12:00:00",
    "last_used": "2024-12-15T10:30:00",
    "last_ip": "192.168.1.100"
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| deleted | boolean | Whether the application password was successfully deleted. |
| previous | object | The previous application password object before deletion. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_application_password_invalid_uuid | Invalid application password UUID. |
| rest_forbidden | You do not have permission to delete this application password. |
