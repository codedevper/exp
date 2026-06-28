## Update a Post
PUT /wp/v2/posts/<id>

Update an existing post. The request requires authentication and the edit_posts capability for the target post.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/posts/123 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "content": "Updated content.",
    "status": "draft"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the post. Required |
| date | string | The date the post was published, in the site's timezone |
| date_gmt | string | The date the post was published, in GMT |
| slug | string | An alphanumeric identifier for the post unique to its type |
| status | string | A named status for the post |
| password | string | A password to protect access to the content and excerpt |
| title | string | The title for the post |
| content | string | The content for the post |
| author | integer | The ID for the author of the post |
| excerpt | string | The excerpt for the post |
| featured_media | integer | The ID of the featured media for the post |
| comment_status | string | Whether or not comments are open on the post |
| ping_status | string | Whether or not pingbacks are open on the post |
| sticky | boolean | Whether or not the post should be treated as sticky |
| template | string | The theme file to use to display the post |
| format | string | The format for the post |
| meta | object | Meta fields |
| categories | array | The terms assigned to the post in the category taxonomy |
| tags | array | The terms assigned to the post in the post_tag taxonomy |

## Response
```json
{
  "id": 123,
  "date": "2025-01-15T10:00:00",
  "date_gmt": "2025-01-15T10:00:00",
  "slug": "updated-title",
  "status": "draft",
  "type": "post",
  "title": { "rendered": "Updated Title" },
  "content": { "rendered": "<p>Updated content.</p>", "protected": false },
  "author": 1,
  "featured_media": 0,
  "comment_status": "open",
  "ping_status": "open",
  "sticky": false,
  "template": "",
  "format": "standard",
  "meta": [],
  "categories": [1],
  "tags": []
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the post |
| date | string | The date the post was published, in the site's timezone |
| date_gmt | string | The date the post was published, in GMT |
| guid | object | The globally unique identifier for the post |
| link | string | URL to the post |
| modified | string | The date the post was last modified, in the site's timezone |
| modified_gmt | string | The date the post was last modified, in GMT |
| slug | string | An alphanumeric identifier for the post unique to its type |
| status | string | A named status for the post |
| type | string | Type of post |
| title | object | The title for the post |
| content | object | The content for the post |
| excerpt | object | The excerpt for the post |
| author | integer | The ID for the author of the post |
| featured_media | integer | The ID of the featured media for the post |
| comment_status | string | Whether or not comments are open on the post |
| ping_status | string | Whether or not pingbacks are open on the post |
| sticky | boolean | Whether or not the post should be treated as sticky |
| template | string | The theme file to use to display the post |
| format | string | The format for the post |
| meta | object | Meta fields |
| categories | array | The terms assigned to the post in the category taxonomy |
| tags | array | The terms assigned to the post in the post_tag taxonomy |

## Error Codes
| Code | Description |
|------|-------------|
| rest_post_invalid_id | Invalid post ID (404) |
| rest_forbidden | You do not have permission to update this post (403) |
| rest_invalid_param | Invalid parameter (400) |
