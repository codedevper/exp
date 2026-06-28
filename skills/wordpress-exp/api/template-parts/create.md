## Create a Template Part
POST /wp/v2/template-parts

Create a new block template part. Requires authentication with edit_theme_options capability.

## Example Request
```bash
curl -X POST https://example.com/wp-json/wp/v2/template-parts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "slug": "custom-footer",
    "title": "Custom Footer",
    "description": "A custom footer with social links",
    "content": "<!-- wp:group {\"backgroundColor\":\"dark\",\"textColor\":\"white\"} -->\\n<!-- wp:social-links -->\\n<!-- wp:social-link {\"url\":\"https://twitter.com\",\"service\":\"twitter\"} /-->\\n<!-- wp:social-link {\"url\":\"https://github.com\",\"service\":\"github\"} /-->\\n<!-- /wp:social-links -->\\n<!-- /wp:group -->",
    "area": "footer"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| slug | string | **Required.** Template part slug unique within the theme. Must not already exist. |
| description | string | Description of the template part. |
| title | string | Title of the template part. Defaults to the slug if not provided. |
| content | string | **Required.** Block content markup for the template part. |
| area | string | Area where the template part will be used. Options: header, footer, sidebar, uncategorized. Default: uncategorized |
| theme | string | Theme stylesheet to associate with. Defaults to the active theme. |

## Response
```json
{
  "id": "twentytwentyfour//custom-footer",
  "slug": "custom-footer",
  "theme": "twentytwentyfour",
  "type": "wp_template_part",
  "source": "custom",
  "origin": "custom",
  "content": {
    "block_version": 3,
    "raw": "<!-- wp:group {\\\"backgroundColor\\\":\\\"dark\\\",\\\"textColor\\\":\\\"white\\\"} -->\\n<!-- wp:social-links -->\\n<!-- wp:social-link {\\\"url\\\":\\\"https://twitter.com\\\",\\\"service\\\":\\\"twitter\\\"} /-->\\n<!-- wp:social-link {\\\"url\\\":\\\"https://github.com\\\",\\\"service\\\":\\\"github\\\"} /-->\\n<!-- /wp:social-links -->\\n<!-- /wp:group -->",
    "rendered": ""
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
  "post_types": ["post", "page"],
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wp/v2/template-parts/twentytwentyfour//custom-footer"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/wp/v2/template-parts"
      }
    ]
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier in format {theme}//{slug}. |
| slug | string | Template part slug unique within the theme. |
| theme | string | Theme stylesheet the template part belongs to. |
| type | string | Template type. Always wp_template_part. |
| source | string | Source of the template part. Will be custom. |
| origin | string | Origin. Will be custom. |
| content | object | Raw and rendered block content. |
| title | object | Raw and rendered title. |
| description | string | Description. |
| author | integer | WordPress user ID of the author (current user). |
| has_theme_file | boolean | Whether the template part exists as a theme file. |
| is_custom | boolean | Whether it was custom-created. |
| status | string | Status. Always publish. |
| area | string | Area. Options: header, footer, sidebar, uncategorized. |
| post_types | array | Post types this template part can be used with. |
| _links | object | HAL links. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_templates_invalid_id | The template part ID is invalid. |
| rest_forbidden | You do not have permission to create template parts. |
| rest_invalid_param | Invalid parameter(s) provided. |
