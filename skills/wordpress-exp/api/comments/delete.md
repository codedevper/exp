## Delete a Comment
DELETE /wp/v2/comments/<id>

Delete a specific comment from the site.

## Example Request
```bash
curl -X DELETE https://example.com/wp-json/wp/v2/comments/5 \
  -H "Content-Type: application/json" \
  -d '{
    "force": true
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the comment. Required. |
| force | boolean | Whether to bypass trash and force deletion. |
| password | string | The password for a password-protected post. |

## Response
```json
{
  "deleted": true,
  "previous": {
    "id": 5,
    "post": 1,
    "parent": 0,
    "author": 0,
    "author_name": "Jane Visitor",
    "author_url": "",
    "author_ip": "192.168.1.2",
    "author_user_agent": "curl/7.68.0",
    "date": "2025-06-28T10:00:00",
    "date_gmt": "2025-06-28T10:00:00",
    "content": {
      "rendered": "This is a great article!"
    },
    "link": "https://example.com/hello-world/#comment-5",
    "status": "approved",
    "type": "comment",
    "meta": []
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| deleted | boolean | Whether the comment was successfully deleted. |
| previous | object | The data of the comment before deletion. |

### previous object
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
| rest_forbidden | You do not have permission to delete this comment. |
