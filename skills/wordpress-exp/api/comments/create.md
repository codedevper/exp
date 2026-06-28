## Create a Comment
POST /wp/v2/comments

Create a new comment on a post or as a reply to another comment.

## Example Request
```bash
curl -X POST https://example.com/wp-json/wp/v2/comments \
  -H "Content-Type: application/json" \
  -d '{
    "post": 1,
    "content": "This is a great article!",
    "author_name": "Jane Visitor",
    "author_email": "jane@example.com"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| post | integer | ID of the associated post. Required if not replying. |
| parent | integer | ID of the parent comment (for replies). |
| author | integer | ID of the comment author. |
| author_name | string | Display name of the comment author. |
| author_email | string | Email address of the comment author. |
| author_url | string | URL of the comment author's website. |
| content | string | The content of the comment. Required. |
| date | string | The date the comment was published. |
| date_gmt | string | The date the comment was published in GMT. |
| meta | object | Meta fields registered for the comment. |
| status | string | The status of the comment. |

## Response
```json
{
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
| rest_forbidden | You do not have permission to create comments. |
