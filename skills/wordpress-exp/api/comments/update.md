## Update a Comment
PUT /wp/v2/comments/<id>

Update an existing comment's content, status, or other details.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/comments/5 \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Updated: This is indeed a fantastic article!",
    "status": "approved"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the comment. Required. |
| post | integer | ID of the associated post. |
| parent | integer | ID of the parent comment (for replies). |
| author | integer | ID of the comment author. |
| author_name | string | Display name of the comment author. |
| author_email | string | Email address of the comment author. |
| author_url | string | URL of the comment author's website. |
| content | string | The content of the comment. |
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
    "rendered": "Updated: This is indeed a fantastic article!"
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
| rest_forbidden | You do not have permission to update this comment. |
