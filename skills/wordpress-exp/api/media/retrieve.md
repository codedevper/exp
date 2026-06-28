## Retrieve Media
GET /wp/v2/media/<id>

Retrieve a single media item by its ID.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/media/10 \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the media item. Required |
| context | string | Scope under which the request is made. Default: view |

## Response
```json
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
| rest_forbidden | You do not have permission to access this media item (403) |
| rest_invalid_param | Invalid parameter (400) |
