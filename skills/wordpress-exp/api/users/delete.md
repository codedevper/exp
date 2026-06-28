## Delete a User
DELETE /wp/v2/users/<id>

Delete a user from the site. Posts authored by the deleted user must be reassigned.

## Example Request
```bash
curl -X DELETE https://example.com/wp-json/wp/v2/users/3 \
  -H "Content-Type: application/json" \
  -d '{
    "force": true,
    "reassign": 1
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the user. Required. |
| force | boolean | Whether to bypass trash and force deletion. |
| reassign | integer | User ID to reassign the deleted user's posts to. Required. |

## Response
```json
{
  "deleted": true,
  "previous": {
    "id": 3,
    "username": "jdoe",
    "name": "John Doe",
    "email": "jdoe@example.com",
    "description": "",
    "link": "https://example.com/author/jdoe/",
    "slug": "jdoe",
    "avatar_urls": {
      "24": "https://secure.gravatar.com/avatar/...?s=24",
      "48": "https://secure.gravatar.com/avatar/...?s=48",
      "96": "https://secure.gravatar.com/avatar/...?s=96"
    },
    "meta": []
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| deleted | boolean | Whether the user was successfully deleted. |
| previous | object | The data of the user before deletion. |

### previous object
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the user. |
| username | string | Login name for the user. |
| name | string | Display name for the user. |
| email | string | The email address for the user. |
| description | string | Description of the user. |
| link | string | Author link to the user's archive page. |
| slug | string | An alphanumeric identifier for the user. |
| avatar_urls | object | Avatar URLs in various sizes. |
| meta | object | Meta fields registered for the user. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_user_invalid_id | Invalid user ID. |
| rest_invalid_param | Invalid parameter passed. |
| rest_forbidden | You do not have permission to delete this user. |
