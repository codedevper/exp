## List Posts
GET /wp/v2/posts

Retrieve a paginated list of posts. Posts are sorted by date in descending order by default.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/posts \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Default: view |
| page | integer | Current page of the collection. Default: 1 |
| per_page | integer | Maximum number of items to be returned. Default: 10 |
| search | string | Limit results to those matching a string |
| after | string | Limit response to posts published after a given ISO8601 compliant date |
| author | integer | Limit result set to posts assigned to specific authors |
| author_exclude | integer | Ensure result set excludes posts assigned to specific authors |
| before | string | Limit response to posts published before a given ISO8601 compliant date |
| exclude | integer | Ensure result set excludes specific IDs |
| include | integer | Limit result set to specific IDs |
| offset | integer | Offset the result set by a specific number of items |
| order | string | Order sort attribute ascending or descending. Default: desc |
| orderby | string | Sort collection by post attribute. Default: date |
| slug | string | Limit result set to posts with one or more specific slugs |
| status | string | Limit result set to posts assigned one or more statuses. Default: publish |
| categories | integer | Limit result set to all items that have the specified term assigned in the categories taxonomy |
| categories_exclude | integer | Limit result set to all items except those that have the specified term assigned in the categories taxonomy |
| tags | integer | Limit result set to all items that have the specified term assigned in the tags taxonomy |
| tags_exclude | integer | Limit result set to all items except those that have the specified term assigned in the tags taxonomy |
| sticky | boolean | Limit result set to items that are sticky |

## Response
```json
[
  {
    "id": 1,
    "date": "2025-01-01T00:00:00",
    "date_gmt": "2025-01-01T00:00:00",
    "guid": { "rendered": "https://example.com/?p=1" },
    "link": "https://example.com/hello-world",
    "modified": "2025-01-01T00:00:00",
    "modified_gmt": "2025-01-01T00:00:00",
    "slug": "hello-world",
    "status": "publish",
    "type": "post",
    "title": { "rendered": "Hello World" },
    "content": { "rendered": "<p>Welcome to WordPress.</p>", "protected": false },
    "excerpt": { "rendered": "<p>Welcome to WordPress.</p>", "protected": false },
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
]
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
| rest_post_invalid_id | Invalid post ID |
| rest_forbidden | You do not have permission to access posts |
| rest_invalid_param | Invalid parameter |
| rest_invalid_page | Page number is invalid |
