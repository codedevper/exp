## List Pages
GET /wp/v2/pages

Retrieve a paginated list of pages. Pages are sorted by date in descending order by default.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/pages \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Default: view |
| page | integer | Current page of the collection. Default: 1 |
| per_page | integer | Maximum number of items to be returned. Default: 10 |
| search | string | Limit results to those matching a string |
| after | string | Limit response to pages published after a given ISO8601 compliant date |
| author | integer | Limit result set to pages assigned to specific authors |
| author_exclude | integer | Ensure result set excludes pages assigned to specific authors |
| before | string | Limit response to pages published before a given ISO8601 compliant date |
| exclude | integer | Ensure result set excludes specific IDs |
| include | integer | Limit result set to specific IDs |
| offset | integer | Offset the result set by a specific number of items |
| order | string | Order sort attribute ascending or descending. Default: desc |
| orderby | string | Sort collection by page attribute. Default: date |
| slug | string | Limit result set to pages with one or more specific slugs |
| status | string | Limit result set to pages assigned one or more statuses. Default: publish |
| menu_order | integer | Limit result set to pages with a specific menu_order value |
| parent | integer | Limit result set to items with particular parent IDs |
| parent_exclude | integer | Limit result set to items except those of particular parent IDs |

## Response
```json
[
  {
    "id": 2,
    "date": "2025-01-01T00:00:00",
    "date_gmt": "2025-01-01T00:00:00",
    "guid": { "rendered": "https://example.com/?page_id=2" },
    "link": "https://example.com/sample-page",
    "modified": "2025-01-01T00:00:00",
    "modified_gmt": "2025-01-01T00:00:00",
    "slug": "sample-page",
    "status": "publish",
    "type": "page",
    "title": { "rendered": "Sample Page" },
    "content": { "rendered": "<p>This is a sample page.</p>", "protected": false },
    "excerpt": { "rendered": "<p>This is a sample page.</p>", "protected": false },
    "author": 1,
    "featured_media": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "menu_order": 0,
    "template": "",
    "meta": [],
    "parent": 0
  }
]
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the page |
| date | string | The date the page was published, in the site's timezone |
| date_gmt | string | The date the page was published, in GMT |
| guid | object | The globally unique identifier for the page |
| link | string | URL to the page |
| modified | string | The date the page was last modified, in the site's timezone |
| modified_gmt | string | The date the page was last modified, in GMT |
| slug | string | An alphanumeric identifier for the page unique to its type |
| status | string | A named status for the page |
| type | string | Type of page |
| title | object | The title for the page |
| content | object | The content for the page |
| excerpt | object | The excerpt for the page |
| author | integer | The ID for the author of the page |
| featured_media | integer | The ID of the featured media for the page |
| comment_status | string | Whether or not comments are open on the page |
| ping_status | string | Whether or not pingbacks are open on the page |
| menu_order | integer | The order of the page in the menu |
| template | string | The theme file to use to display the page |
| meta | object | Meta fields |
| parent | integer | The ID for the parent of the page |

## Error Codes
| Code | Description |
|------|-------------|
| rest_post_invalid_id | Invalid page ID (404) |
| rest_forbidden | You do not have permission to access pages (403) |
| rest_invalid_param | Invalid parameter (400) |
| rest_invalid_page | Invalid page number |
