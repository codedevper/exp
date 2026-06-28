## Retrieve a Category
GET /wp/v2/categories/<id>

Retrieve a specific category by its ID.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/categories/1 \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the category. Required. |
| context | string | Scope under which the request is made. Default: view |

## Response
```json
{
  "id": 1,
  "count": 5,
  "description": "News and current events",
  "link": "https://example.com/category/news/",
  "name": "News",
  "slug": "news",
  "taxonomy": "category",
  "parent": 0,
  "meta": []
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the category. |
| count | integer | Number of published posts in the category. |
| description | string | HTML description of the category. |
| link | string | URL to the category archive page. |
| name | string | Display name of the category. |
| slug | string | An alphanumeric identifier for the category. |
| taxonomy | string | The taxonomy identifier (always "category" for this endpoint). |
| parent | integer | ID of the parent category (0 if top-level). |
| meta | object | Meta fields registered for the category. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_term_invalid_id | Invalid term ID. |
| rest_invalid_param | Invalid parameter passed. |
| rest_forbidden | You do not have permission to view this category. |
