# Retrieve a Taxonomy
GET /wp/v2/taxonomies/<taxonomy>

Retrieves a single taxonomy by its slug.

## Example Request

```bash
curl -X GET https://example.com/wp-json/wp/v2/taxonomies/category \
  -H "Content-Type: application/json"
```

## Request Parameters

| Name | Type | Description |
|------|------|-------------|
| taxonomy | string | **Required.** The slug of the taxonomy to retrieve (e.g. `category`, `post_tag`). |
| context | string | Scope under which the request is made. Options: `view` (default), `edit`, `embed`. |

## Response

```json
{
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
    ],
    "https://api.w.org/items": [
      {
        "href": "https://example.com/wp-json/wp/v2/categories"
      }
    ]
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
| _links | object | HAL links for the taxonomy. |

## Error Codes

| Code | Description |
|------|-------------|
| rest_taxonomy_invalid_id | The taxonomy slug provided does not match any registered taxonomy. |
| rest_invalid_param | Invalid parameter value. |
