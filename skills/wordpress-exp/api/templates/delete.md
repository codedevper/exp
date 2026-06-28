## Delete a Template
DELETE /wp/v2/templates/<id>

Delete a block template. Only custom templates (source: custom) can be deleted; theme-based templates are not deletable. Requires authentication with edit_theme_options capability.

## Example Request
```bash
curl -X DELETE https://example.com/wp-json/wp/v2/templates/twentytwentyfour%2F%2Fcustom-landing \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | string | **Required.** Template identifier in the format {theme}//{slug}. Must be URL-encoded. |
| force | boolean | Whether to bypass trash and force deletion. Default: false |

## Response
```json
{
  "deleted": true,
  "previous": {
    "id": "twentytwentyfour//custom-landing",
    "slug": "custom-landing",
    "theme": "twentytwentyfour",
    "type": "wp_template",
    "source": "custom",
    "origin": "custom",
    "content": {
      "block_version": 3,
      "raw": "<!-- wp:cover {\\\"overlayColor\\\":\\\"primary\\\",\\\"minHeight\\\":500} -->\\n<!-- wp:paragraph {\\\"align\\\":\\\"center\\\",\\\"placeholder\\\":\\\"Write title...\\\"} -->\\n<p class=\\\"has-text-align-center\\\">Welcome</p>\\n<!-- /wp:paragraph -->\\n<!-- /wp:cover -->"
    },
    "title": {
      "raw": "Custom Landing Page",
      "rendered": "Custom Landing Page"
    },
    "description": "A custom landing page template",
    "author": 1,
    "has_theme_file": false,
    "is_custom": true,
    "status": "publish",
    "area": "uncategorized",
    "post_types": ["page"]
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| deleted | boolean | Whether the template was successfully deleted. |
| previous | object | The template data before deletion. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_templates_invalid_id | The template ID provided is not valid. |
| rest_forbidden | You do not have permission to delete templates. |
