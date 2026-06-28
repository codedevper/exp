## Delete a Revision
DELETE /wp/v2/revisions/<parent>/<id>

Delete a single revision by its parent post ID and revision ID.

## Example Request
```bash
curl -X DELETE https://example.com/wp-json/wp/v2/revisions/42/45 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| parent | integer | **Required.** The ID of the parent post. |
| id | integer | **Required.** The ID of the revision to delete. |
| force | boolean | Whether to bypass Trash and force deletion. Default: `false`. |

## Response
```json
{
  "deleted": true,
  "previous": {
    "id": 45,
    "author": 1,
    "date": "2024-12-15T10:30:00",
    "date_gmt": "2024-12-15T10:30:00",
    "guid": {
      "rendered": "https://example.com/?p=42&preview=true"
    },
    "modified": "2024-12-15T10:30:00",
    "modified_gmt": "2024-12-15T10:30:00",
    "parent": 42,
    "slug": "42-revision-v1",
    "title": {
      "raw": "My Post (Revised)",
      "rendered": "My Post (Revised)"
    },
    "content": {
      "raw": "<!-- wp:paragraph --><p>Updated content.</p><!-- /wp:paragraph -->",
      "rendered": "<p>Updated content.</p>"
    },
    "excerpt": {
      "raw": "",
      "rendered": "<p>Updated content.</p>"
    },
    "meta": {}
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| deleted | boolean | Whether the revision was successfully deleted. |
| previous | object | The previous revision object before deletion. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_revision_invalid_id | Invalid revision ID or parent post ID. |
| rest_forbidden | You do not have permission to delete this revision. |
