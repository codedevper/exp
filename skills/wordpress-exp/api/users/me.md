## Get Current User
GET /wp/v2/users/me

Retrieve the currently authenticated user's details.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/users/me \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Default: view |

## Response
```json
{
  "id": 1,
  "username": "admin",
  "name": "admin",
  "first_name": "",
  "last_name": "",
  "email": "admin@example.com",
  "url": "https://example.com",
  "description": "Site administrator",
  "link": "https://example.com/author/admin/",
  "locale": "en_US",
  "nickname": "admin",
  "slug": "admin",
  "roles": ["administrator"],
  "registered_date": "2023-01-01T00:00:00+00:00",
  "capabilities": {
    "switch_themes": true,
    "edit_themes": true,
    "activate_plugins": true,
    "edit_plugins": true,
    "edit_users": true,
    "manage_options": true
  },
  "extra_capabilities": {
    "administrator": true
  },
  "avatar_urls": {
    "24": "https://secure.gravatar.com/avatar/...?s=24",
    "48": "https://secure.gravatar.com/avatar/...?s=48",
    "96": "https://secure.gravatar.com/avatar/...?s=96"
  },
  "meta": []
}
```

## Schema
Same schema as the Retrieve a User endpoint.

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
| rest_forbidden | You are not currently logged in. |
| rest_invalid_param | Invalid parameter passed. |
