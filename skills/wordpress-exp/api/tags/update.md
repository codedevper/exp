## Update a Tag
PUT /wp/v2/tags/<id>

Update an existing tag's name, description, or slug.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/tags/3 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "React.js",
    "description": "Posts about React.js and modern frontend frameworks"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | Unique identifier for the tag. Required. |
| description | string | HTML description of the tag. |
| name | string | Display name of the tag. |
| slug | string | An alphanumeric identifier for the tag. |
| meta | object | Meta fields registered for the tag. |

## Response
```json
{
  "id": 3,
  "count": 0,
  "description": "Posts about React.js and modern frontend frameworks",
  "link": "https://example.com/tag/react-js/",
  "name": "React.js",
  "slug": "react-js",
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
| rest_forbidden | You do not have permission to update this tag. |
