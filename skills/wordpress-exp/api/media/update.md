## Update Media
PUT /wp/v2/media/<id>

Update an existing media item. The request requires authentication and the upload_files capability for the target media.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/media/15 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Image Title",
    "alt_text": "Updated alt text",
    "caption": "Updated caption"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the media item. Required |
| title | string | The title for the media item |
| caption | string | The caption for the media item |
| description | string | The description for the media item |
| alt_text | string | Alternative text for the media item |
| post | integer | The ID of the parent post to attach the media to |
| author | integer | The ID for the author of the media item |
| comment_status | string | Whether or not comments are open on the media |
| ping_status | string | Whether or not pingbacks are open on the media |
| meta | object | Meta fields |

## Response
```json
{
  "id": 15,
  "date": "2025-01-20T14:00:00",
  "date_gmt": "2025-01-20T14:00:00",
  "slug": "my-uploaded-image",
  "status": "inherit",
  "type": "attachment",
  "title": { "rendered": "Updated Image Title" },
  "author": 1,
  "description": { "rendered": "<p>Image description</p>" },
  "caption": { "rendered": "<p>Updated caption</p>" },
  "alt_text": "Updated alt text",
  "media_type": "image",
  "mime_type": "image/jpeg",
  "media_details": {
    "width": 1920,
    "height": 1080,
    "file": "2025/01/my-uploaded-image.jpg",
    "sizes": {
      "thumbnail": { "file": "my-uploaded-image-150x150.jpg", "width": 150, "height": 150, "mime_type": "image/jpeg", "source_url": "https://example.com/wp-content/uploads/2025/01/my-uploaded-image-150x150.jpg" },
      "medium": { "file": "my-uploaded-image-300x169.jpg", "width": 300, "height": 169, "mime_type": "image/jpeg", "source_url": "https://example.com/wp-content/uploads/2025/01/my-uploaded-image-300x169.jpg" }
    }
  },
  "source_url": "https://example.com/wp-content/uploads/2025/01/my-uploaded-image.jpg",
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
| rest_forbidden | You do not have permission to update this media item (403) |
| rest_invalid_param | Invalid parameter (400) |
