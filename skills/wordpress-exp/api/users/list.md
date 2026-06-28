## List Users
GET /wp/v2/users

Retrieve a paginated list of all registered users on the site.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/users \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Default: view |
| page | integer | Current page of the collection. Default: 1 |
| per_page | integer | Maximum number of items to be returned. Default: 10 |
| search | string | Limit results to those matching a string. |
| exclude | array | Ensure result set excludes specific IDs. |
| include | array | Limit result set to specific IDs. |
| offset | integer | Offset the result set by a specific number of items. |
| order | string | Order sort attribute ascending or descending. Accepts asc, desc. Default: asc |
| orderby | string | Sort collection by object attribute. Accepts id, include, name, registered_date, slug, email, url. Default: name |
| slug | string | Limit result set to users with one or more specific slugs. |
| roles | array | Limit result set to users matching at least one specific role. |
| who | string | Limit result set to users who can access the admin dashboard. Accepts authors. |

## Response
```json
[
  {
    "id": 1,
    "name": "admin",
    "url": "https://example.com",
    "description": "Site administrator",
    "link": "https://example.com/author/admin/",
    "slug": "admin",
    "avatar_urls": {
      "24": "https://secure.gravatar.com/avatar/...?s=24",
      "48": "https://secure.gravatar.com/avatar/...?s=48",
      "96": "https://secure.gravatar.com/avatar/...?s=96"
    },
    "meta": [],
    "_links": {
      "self": [{ "href": "https://example.com/wp-json/wp/v2/users/1" }],
      "collection": [{ "href": "https://example.com/wp-json/wp/v2/users" }]
    }
  }
]
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the user. |
| name | string | Display name for the user. |
| url | string | URL of the user's website. |
| description | string | Description of the user. |
| link | string | Author link to the user's archive page. |
| slug | string | Alphanumeric identifier for the user. |
| avatar_urls | object | Avatar URLs in various sizes (24, 48, 96). |
| meta | object | Meta fields registered for the user. |
| _links | object | HAL links for self and collection. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_invalid_param | Invalid parameter passed. |
| rest_forbidden | You do not have permission to list users. |
