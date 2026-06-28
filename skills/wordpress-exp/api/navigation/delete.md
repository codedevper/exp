## Delete a Navigation Menu
DELETE /wp/v2/navigation/<id>

Delete a single navigation menu object by its ID.

## Example Request
```bash
curl -X DELETE https://example.com/wp-json/wp/v2/navigation/3 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | **Required.** The ID of the navigation menu to delete. |
| force | boolean | Whether to bypass Trash and force deletion. Default: `false`. |

## Response
```json
{
  "deleted": true,
  "previous": {
    "id": 3,
    "title": {
      "rendered": "Main Navigation"
    },
    "content": {
      "raw": "<!-- wp:navigation-link {\"label\":\"Home\",\"url\":\"/\",\"kind\":\"custom\",\"isTopLevelLink\":true} /-->",
      "rendered": "<a class=\"wp-block-navigation-item__content\" href=\"/\">Home</a>"
    },
    "status": "publish",
    "slug": "main-navigation",
    "meta": {}
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| deleted | boolean | Whether the navigation menu was successfully deleted. |
| previous | object | The previous navigation menu object before deletion. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_navigation_invalid_id | Invalid navigation menu ID. |
| rest_forbidden | You do not have permission to delete this navigation menu. |
