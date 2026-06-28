## List Comments
GET /wp/v2/comments

Retrieve a paginated list of all comments on the site.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/comments \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Default: view |
| page | integer | Current page of the collection. Default: 1 |
| per_page | integer | Maximum number of items to be returned. Default: 10 |
| search | string | Limit results to those matching a string. |
| after | string | Limit response to comments published after a given ISO8601 date. |
| author | array | Limit result set to comments assigned to specific user IDs. |
| author_exclude | array | Ensure result set excludes comments assigned to specific user IDs. |
| author_email | string | Limit result set to that from a specific author email. |
| before | string | Limit response to comments published before a given ISO8601 date. |
| exclude | array | Ensure result set excludes specific IDs. |
| include | array | Limit result set to specific IDs. |
| offset | integer | Offset the result set by a specific number of items. |
| order | string | Order sort attribute ascending or descending. Accepts asc, desc. Default: asc |
| orderby | string | Sort collection by object attribute. Accepts date, date_gmt, id, include, post, parent, type. Default: date_gmt |
| parent | array | Limit result set to comments of specific parent IDs. |
| parent_exclude | array | Ensure result set excludes specific parent IDs. |
| post | array | Limit result set to comments assigned to specific post IDs. |
| status | string | Limit result set to comments assigned a specific status. Default: approve |
| type | string | Limit result set to comments assigned a specific type. Default: comment |
| password | string | The password for a password-protected post. |

## Response
```json
[
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
]
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
| status | string | The status of the comment (approved, hold, spam, trash). |
| type | string | Type of the comment. |
| meta | object | Meta fields registered for the comment. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_comment_invalid_id | Invalid comment ID. |
| rest_invalid_param | Invalid parameter passed. |
| rest_forbidden | You do not have permission to list comments. |
