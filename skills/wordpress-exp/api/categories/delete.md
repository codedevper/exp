## Delete a Category
DELETE /wp/v2/categories/<id>

Delete a specific category. Posts assigned to this category will not be deleted but will be uncategorized.

## Example Request
```bash
curl -X DELETE https://example.com/wp-json/wp/v2/categories/3 \
  -H "Content-Type: application/json" \
  -d '{
    "force": true
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the category. Required. |
| force | boolean | Whether to bypass trash and force deletion. |

## Response
```json
{
  "deleted": true,
  "previous": {
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
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| deleted | boolean | Whether the category was successfully deleted. |
| previous | object | The data of the category before deletion. |

### previous object
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
| rest_forbidden | You do not have permission to delete this category. |
