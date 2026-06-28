## List Categories
GET /wp/v2/categories

Retrieve a paginated list of all categories on the site.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/categories \
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
| order | string | Order sort attribute ascending or descending. Accepts asc, desc. Default: asc |
| orderby | string | Sort collection by object attribute. Accepts id, include, name, slug, term_group, description, count. Default: name |
| hide_empty | boolean | Whether to hide terms not assigned to any posts. |
| parent | integer | Limit result set to terms assigned to a specific parent. |
| post | integer | Limit result set to terms assigned to a specific post. |
| slug | string | Limit result set to terms with one or more specific slugs. |

## Response
```json
[
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
  },
  {
    "id": 2,
    "count": 3,
    "description": "Tutorials and how-to guides",
    "link": "https://example.com/category/tutorials/",
    "name": "Tutorials",
    "slug": "tutorials",
    "taxonomy": "category",
    "parent": 0,
    "meta": []
  }
]
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
| rest_forbidden | You do not have permission to list categories. |
