# List Taxonomies
GET /wp/v2/taxonomies

Retrieves all registered taxonomies.

## Example Request

```bash
curl -X GET https://example.com/wp-json/wp/v2/taxonomies \
  -H "Content-Type: application/json"
```

## Request Parameters

| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Options: `view` (default), `edit`, `embed`. |
| type | string | Limit results to taxonomies associated with a specific post type slug (e.g. `post`, `page`). |

## Response

```json
{
  "category": {
    "name": "Categories",
    "slug": "category",
    "description": "",
    "types": ["post"],
    "hierarchical": true,
    "rest_base": "categories",
    "visibility": {
      "show_cloud": true,
      "show_ui": true,
      "show_admin_column": true
    },
    "_links": {
      "collection": [
        {
          "href": "https://example.com/wp-json/wp/v2/taxonomies"
        }
      ]
    }
  },
  "post_tag": {
    "name": "Tags",
    "slug": "post_tag",
    "description": "",
    "types": ["post"],
    "hierarchical": false,
    "rest_base": "tags",
    "visibility": {
      "show_cloud": true,
      "show_ui": true,
      "show_admin_column": true
    },
    "_links": {
      "collection": [
        {
          "href": "https://example.com/wp-json/wp/v2/taxonomies"
        }
      ]
    }
  }
}
```

## Schema

| Field | Type | Description |
|-------|------|-------------|
| name | string | The human-readable name of the taxonomy. |
| slug | string | The machine-readable slug of the taxonomy. |
| description | string | The description of the taxonomy. |
| types | array | Post types the taxonomy is associated with. |
| hierarchical | boolean | Whether the taxonomy is hierarchical. |
| rest_base | string | The REST API base path for the taxonomy. |
| visibility.show_cloud | boolean | Whether the taxonomy is available in tag clouds. |
| visibility.show_ui | boolean | Whether the taxonomy is displayed in the admin UI. |
| visibility.show_admin_column | boolean | Whether to show the taxonomy column in the admin list table. |
| _links | object | HAL links for the taxonomy collection. |

## Error Codes

| Code | Description |
|------|-------------|
| rest_invalid_param | Invalid parameter value. |
