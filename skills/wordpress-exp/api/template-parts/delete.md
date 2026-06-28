## Delete a Template Part
DELETE /wp/v2/template-parts/<id>

Delete a block template part. Only custom template parts (source: custom) can be deleted; theme-based template parts are not deletable. Requires authentication with edit_theme_options capability.

## Example Request
```bash
curl -X DELETE https://example.com/wp-json/wp/v2/template-parts/twentytwentyfour%2F%2Fcustom-footer \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | string | **Required.** Template part identifier in the format {theme}//{slug}. Must be URL-encoded. |
| force | boolean | Whether to bypass trash and force deletion. Default: false |

## Response
```json
{
  "deleted": true,
  "previous": {
    "id": "twentytwentyfour//custom-footer",
    "slug": "custom-footer",
    "theme": "twentytwentyfour",
    "type": "wp_template_part",
    "source": "custom",
    "origin": "custom",
    "content": {
      "block_version": 3,
      "raw": "<!-- wp:group {\\\"backgroundColor\\\":\\\"dark\\\",\\\"textColor\\\":\\\"white\\\"} -->\\n<!-- wp:social-links -->\\n<!-- wp:social-link {\\\"url\\\":\\\"https://twitter.com\\\",\\\"service\\\":\\\"twitter\\\"} /-->\\n<!-- wp:social-link {\\\"url\\\":\\\"https://github.com\\\",\\\"service\\\":\\\"github\\\"} /-->\\n<!-- /wp:social-links -->\\n<!-- /wp:group -->"
    },
    "title": {
      "raw": "Custom Footer",
      "rendered": "Custom Footer"
    },
    "description": "A custom footer with social links",
    "author": 1,
    "has_theme_file": false,
    "is_custom": true,
    "status": "publish",
    "area": "footer",
    "post_types": ["post", "page"]
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| deleted | boolean | Whether the template part was successfully deleted. |
| previous | object | The template part data before deletion. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_templates_invalid_id | The template part ID provided is not valid. |
| rest_forbidden | You do not have permission to delete template parts. |
