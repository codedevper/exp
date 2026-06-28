## Update a User
PUT /wp/v2/users/<id>

Update an existing user's details.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/users/3 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Johnathan Doe",
    "description": "Updated profile description",
    "url": "https://johndoe.blog"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the user. Required. |
| username | string | Login name for the user. |
| name | string | Display name for the user. |
| first_name | string | First name for the user. |
| last_name | string | Last name for the user. |
| email | string | The email address for the user. |
| url | string | URL of the user's website. |
| description | string | Description of the user. |
| locale | string | Locale for the user. |
| nickname | string | The nickname for the user. |
| slug | string | An alphanumeric identifier for the user. |
| roles | array | Roles assigned to the user. |
| password | string | Password for the user. |
| meta | object | Meta fields registered for the user. |

## Response
```json
{
  "id": 3,
  "username": "jdoe",
  "name": "Johnathan Doe",
  "first_name": "John",
  "last_name": "Doe",
  "email": "jdoe@example.com",
  "url": "https://johndoe.blog",
  "description": "Updated profile description",
  "link": "https://example.com/author/jdoe/",
  "locale": "en_US",
  "nickname": "jdoe",
  "slug": "jdoe",
  "roles": ["author"],
  "registered_date": "2025-01-15T10:30:00+00:00",
  "avatar_urls": {
    "24": "https://secure.gravatar.com/avatar/...?s=24",
    "48": "https://secure.gravatar.com/avatar/...?s=48",
    "96": "https://secure.gravatar.com/avatar/...?s=96"
  },
  "meta": []
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the user. |
| username | string | Login name for the user. |
| name | string | Display name for the user. |
| first_name | string | First name for the user. |
| last_name | string | Last name for the user. |
| email | string | The email address for the user. |
| url | string | URL of the user's website. |
| description | string | Description of the user. |
| link | string | Author link to the user's archive page. |
| locale | string | Locale for the user. |
| nickname | string | The nickname for the user. |
| slug | string | An alphanumeric identifier for the user. |
| roles | array | Roles assigned to the user. |
| registered_date | string | Registration date in RFC3339 format. |
| capabilities | object | All capabilities assigned to the user. |
| extra_capabilities | object | Any extra capabilities assigned to the user. |
| avatar_urls | object | Avatar URLs in various sizes. |
| meta | object | Meta fields registered for the user. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_user_invalid_id | Invalid user ID. |
| rest_invalid_param | Invalid parameter passed. |
| rest_forbidden | You do not have permission to update this user. |
