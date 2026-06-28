## List Tags
GET /wp/v2/tags

Retrieve a paginated list of all tags on the site.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/tags \
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
| post | integer | Limit result set to terms assigned to a specific post. |
| slug | string | Limit result set to terms with one or more specific slugs. |

## Response
```json
[
  {
    "id": 1,
    "count": 4,
    "description": "Content related to JavaScript programming",
    "link": "https://example.com/tag/javascript/",
    "name": "JavaScript",
    "slug": "javascript",
    "taxonomy": "post_tag",
    "meta": []
  },
  {
    "id": 2,
    "count": 2,
    "description": "Tutorials about WordPress development",
    "link": "https://example.com/tag/wordpress/",
    "name": "WordPress",
    "slug": "wordpress",
    "taxonomy": "post_tag",
    "meta": []
  }
]
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the tag. |
| count | integer | Number of published posts with the tag. |
| description | string | HTML description of the tag. |
| link | string | URL to the tag archive page. |
| name | string | Display name of the tag. |
| slug | string | An alphanumeric identifier for the tag. |
| taxonomy | string | The taxonomy identifier (always "post_tag" for this endpoint). |
| meta | object | Meta fields registered for the tag. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_term_invalid_id | Invalid term ID. |
| rest_invalid_param | Invalid parameter passed. |
| rest_forbidden | You do not have permission to list tags. |
