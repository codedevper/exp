## Delete a Page
DELETE /wp/v2/pages/<id>

Delete an existing page. The request requires authentication and the delete_pages capability for the target page.

## Example Request
```bash
curl -X DELETE https://example.com/wp-json/wp/v2/pages/124 \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the page. Required |
| force | boolean | Whether to bypass trash and force deletion. Default: false |

## Response
```json
{
  "id": 124,
  "date": "2025-01-15T10:00:00",
  "date_gmt": "2025-01-15T10:00:00",
  "slug": "about-us",
  "status": "trash",
  "type": "page",
  "title": { "rendered": "About Us" },
  "content": { "rendered": "<p>Page content.</p>", "protected": false },
  "author": 1,
  "featured_media": 0,
  "comment_status": "closed",
  "ping_status": "closed",
  "menu_order": 0,
  "template": "",
  "meta": [],
  "parent": 0
}
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
| status | string | A named status for the page (trash after soft delete) |
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
| rest_forbidden | You do not have permission to delete this page (403) |
| rest_invalid_param | Invalid parameter (400) |
| rest_trash_failed | The page could not be trashed (500) |
