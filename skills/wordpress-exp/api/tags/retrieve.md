## Retrieve a Tag
GET /wp/v2/tags/<id>

Retrieve a specific tag by its ID.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/tags/1 \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the tag. Required. |
| context | string | Scope under which the request is made. Default: view |

## Response
```json
{
  "id": 1,
  "count": 4,
  "description": "Content related to JavaScript programming",
  "link": "https://example.com/tag/javascript/",
  "name": "JavaScript",
  "slug": "javascript",
  "taxonomy": "post_tag",
  "meta": []
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the tag. |
| count | integer | Number of published posts with the tag. |
| description | string | HTML description of the tag. |
| link | string | URL to the tag archive page. |
| name | string | Display name of the tag. |
| slug | string | An alphanumeric identifier for the tag. |
| taxonomy | string | The taxonomy identifier (always "post_tag" for this endpoint). |
| meta | object | Meta fields registered for the tag. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_term_invalid_id | Invalid term ID. |
| rest_invalid_param | Invalid parameter passed. |
| rest_forbidden | You do not have permission to view this tag. |
