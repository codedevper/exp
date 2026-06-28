## Update a Page
PUT /wp/v2/pages/<id>

Update an existing page. The request requires authentication and the edit_pages capability for the target page.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/pages/124 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Page Title",
    "content": "Updated content.",
    "menu_order": 1
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the page. Required |
| date | string | The date the page was published, in the site's timezone |
| date_gmt | string | The date the page was published, in GMT |
| slug | string | An alphanumeric identifier for the page unique to its type |
| status | string | A named status for the page |
| password | string | A password to protect access to the content and excerpt |
| title | string | The title for the page |
| content | string | The content for the page |
| author | integer | The ID for the author of the page |
| excerpt | string | The excerpt for the page |
| featured_media | integer | The ID of the featured media for the page |
| comment_status | string | Whether or not comments are open on the page |
| ping_status | string | Whether or not pingbacks are open on the page |
| menu_order | integer | The order of the page in the menu |
| template | string | The theme file to use to display the page |
| meta | object | Meta fields |
| parent | integer | The ID for the parent of the page |

## Response
```json
{
  "id": 124,
  "date": "2025-01-15T10:00:00",
  "date_gmt": "2025-01-15T10:00:00",
  "slug": "updated-page-title",
  "status": "publish",
  "type": "page",
  "title": { "rendered": "Updated Page Title" },
  "content": { "rendered": "<p>Updated content.</p>", "protected": false },
  "author": 1,
  "featured_media": 0,
  "comment_status": "closed",
  "ping_status": "closed",
  "menu_order": 1,
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
| rest_forbidden | You do not have permission to update this page (403) |
| rest_invalid_param | Invalid parameter (400) |
