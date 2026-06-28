## Retrieve a Comment
GET /wp/v2/comments/<id>

Retrieve a specific comment by its ID.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/comments/1 \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the comment. Required. |
| context | string | Scope under which the request is made. Default: view |
| password | string | The password for a password-protected post. |

## Response
```json
{
  "id": 1,
  "post": 1,
  "parent": 0,
  "author": 1,
  "author_name": "admin",
  "author_url": "https://example.com",
  "author_ip": "192.168.1.1",
  "author_user_agent": "Mozilla/5.0...",
  "date": "2025-01-10T14:30:00",
  "date_gmt": "2025-01-10T14:30:00",
  "content": {
    "rendered": "<p>Great post! Thanks for sharing.</p>"
  },
  "link": "https://example.com/hello-world/#comment-1",
  "status": "approved",
  "type": "comment",
  "meta": []
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the comment. |
| post | integer | ID of the associated post. |
| parent | integer | ID of the parent comment (0 if top-level). |
| author | integer | ID of the comment author (0 if guest). |
| author_name | string | Display name of the comment author. |
| author_url | string | URL of the comment author's website. |
| author_ip | string | IP address of the comment author. |
| author_user_agent | string | User agent of the comment author. |
| date | string | The date the comment was published. |
| date_gmt | string | The date the comment was published in GMT. |
| content | object | The comment content. Contains rendered HTML. |
| link | string | URL to the comment. |
| status | string | The status of the comment. |
| type | string | Type of the comment. |
| meta | object | Meta fields registered for the comment. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_comment_invalid_id | Invalid comment ID. |
| rest_invalid_param | Invalid parameter passed. |
| rest_forbidden | You do not have permission to view this comment. |
