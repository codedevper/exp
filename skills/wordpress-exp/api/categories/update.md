## Update a Category
PUT /wp/v2/categories/<id>

Update an existing category's name, description, slug, or parent.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/categories/3 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Tech & Gadgets",
    "description": "The latest in technology and gadgets"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the category. Required. |
| description | string | HTML description of the category. |
| name | string | Display name of the category. |
| slug | string | An alphanumeric identifier for the category. |
| parent | integer | ID of the parent category. |
| meta | object | Meta fields registered for the category. |

## Response
```json
{
  "id": 3,
  "count": 0,
  "description": "The latest in technology and gadgets",
  "link": "https://example.com/category/tech-gadgets/",
  "name": "Tech & Gadgets",
  "slug": "tech-gadgets",
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
| rest_forbidden | You do not have permission to update this category. |
