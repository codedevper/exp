## List Media
GET /wp/v2/media

Retrieve a paginated list of media items. Items are sorted by date in descending order by default.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/media \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Default: view |
| page | integer | Current page of the collection. Default: 1 |
| per_page | integer | Maximum number of items to be returned. Default: 10 |
| search | string | Limit results to those matching a string |
| after | string | Limit response to media published after a given ISO8601 compliant date |
| author | integer | Limit result set to media assigned to specific authors |
| author_exclude | integer | Ensure result set excludes media assigned to specific authors |
| before | string | Limit response to media published before a given ISO8601 compliant date |
| exclude | integer | Ensure result set excludes specific IDs |
| include | integer | Limit result set to specific IDs |
| offset | integer | Offset the result set by a specific number of items |
| order | string | Order sort attribute ascending or descending. Default: desc |
| orderby | string | Sort collection by media attribute. Default: date |
| parent | integer | Limit result set to items with particular parent post IDs |
| parent_exclude | integer | Limit result set to items except those of particular parent IDs |
| slug | string | Limit result set to media with one or more specific slugs |
| status | string | Limit result set to media assigned one or more statuses. Default: inherit |
| media_type | string | Limit result set to media of a particular media type |
| mime_type | string | Limit result set to media of a particular MIME type |

## Response
```json
[
  {
    "id": 10,
    "date": "2025-01-10T12:00:00",
    "date_gmt": "2025-01-10T12:00:00",
    "guid": { "rendered": "https://example.com/wp-content/uploads/2025/01/photo.jpg" },
    "link": "https://example.com/photo",
    "modified": "2025-01-10T12:00:00",
    "modified_gmt": "2025-01-10T12:00:00",
    "slug": "photo",
    "status": "inherit",
    "type": "attachment",
    "title": { "rendered": "Photo" },
    "author": 1,
    "comment_status": "open",
    "ping_status": "closed",
    "template": "",
    "meta": [],
    "description": { "rendered": "<p>A sample photo</p>" },
    "caption": { "rendered": "<p>Photo caption</p>" },
    "alt_text": "Alt text for photo",
    "media_type": "image",
    "mime_type": "image/jpeg",
    "media_details": {
      "width": 1920,
      "height": 1080,
      "file": "2025/01/photo.jpg",
      "sizes": {
        "thumbnail": { "file": "photo-150x150.jpg", "width": 150, "height": 150, "mime_type": "image/jpeg", "source_url": "https://example.com/wp-content/uploads/2025/01/photo-150x150.jpg" },
        "medium": { "file": "photo-300x169.jpg", "width": 300, "height": 169, "mime_type": "image/jpeg", "source_url": "https://example.com/wp-content/uploads/2025/01/photo-300x169.jpg" },
        "full": { "file": "photo.jpg", "width": 1920, "height": 1080, "mime_type": "image/jpeg", "source_url": "https://example.com/wp-content/uploads/2025/01/photo.jpg" }
      }
    },
    "source_url": "https://example.com/wp-content/uploads/2025/01/photo.jpg",
    "post": null
  }
]
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the media item |
| date | string | The date the media was published, in the site's timezone |
| date_gmt | string | The date the media was published, in GMT |
| guid | object | The globally unique identifier for the media |
| link | string | URL to the media |
| modified | string | The date the media was last modified, in the site's timezone |
| modified_gmt | string | The date the media was last modified, in GMT |
| slug | string | An alphanumeric identifier for the media unique to its type |
| status | string | A named status for the media |
| type | string | Type of media (attachment) |
| title | object | The title for the media |
| author | integer | The ID for the author of the media |
| comment_status | string | Whether or not comments are open on the media |
| ping_status | string | Whether or not pingbacks are open on the media |
| template | string | The theme file to use to display the media |
| meta | object | Meta fields |
| description | object | The description for the media |
| caption | object | The caption for the media |
| alt_text | string | Alternative text for the media |
| media_type | string | Type of media (image, video, audio, file) |
| mime_type | string | MIME type of the media |
| media_details | object | Details about the media file, such as dimensions and sizes |
| source_url | string | URL to the original media file |
| post | integer | The ID of the parent post, or null if unattached |

## Error Codes
| Code | Description |
|------|-------------|
| rest_post_invalid_id | Invalid media ID (404) |
| rest_forbidden | You do not have permission to access media (403) |
| rest_invalid_param | Invalid parameter (400) |
| rest_invalid_page | Page number is invalid |
