## Update a Template Part
PUT /wp/v2/template-parts/<id>

Update an existing block template part. Requires authentication with edit_theme_options capability.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/template-parts/twentytwentyfour%2F%2Fcustom-footer \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Updated Footer",
    "description": "An updated footer with additional links",
    "content": "<!-- wp:group {\"backgroundColor\":\"dark\",\"textColor\":\"white\"} -->\\n<!-- wp:social-links -->\\n<!-- wp:social-link {\"url\":\"https://twitter.com\",\"service\":\"twitter\"} /-->\\n<!-- wp:social-link {\"url\":\"https://github.com\",\"service\":\"github\"} /-->\\n<!-- wp:social-link {\"url\":\"https://linkedin.com\",\"service\":\"linkedin\"} /-->\\n<!-- /wp:social-links -->\\n<!-- /wp:group -->",
    "area": "footer"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | string | **Required.** Template part identifier in the format {theme}//{slug}. Must be URL-encoded. |
| description | string | Updated description of the template part. |
| title | string | Updated title of the template part. |
| content | string | Updated block content markup. |
| area | string | Updated area. Options: header, footer, sidebar, uncategorized. |
| theme | string | Updated theme stylesheet to associate with. |

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
    "raw": "<!-- wp:group {\\\"backgroundColor\\\":\\\"dark\\\",\\\"textColor\\\":\\\"white\\\"} -->\\n<!-- wp:social-links -->\\n<!-- wp:social-link {\\\"url\\\":\\\"https://twitter.com\\\",\\\"service\\\":\\\"twitter\\\"} /-->\\n<!-- wp:social-link {\\\"url\\\":\\\"https://github.com\\\",\\\"service\\\":\\\"github\\\"} /-->\\n<!-- wp:social-link {\\\"url\\\":\\\"https://linkedin.com\\\",\\\"service\\\":\\\"linkedin\\\"} /-->\\n<!-- /wp:social-links -->\\n<!-- /wp:group -->",
    "rendered": ""
  },
  "title": {
    "raw": "Updated Footer",
    "rendered": "Updated Footer"
  },
  "description": "An updated footer with additional links",
  "author": 1,
  "has_theme_file": false,
  "is_custom": true,
  "modified": "2024-06-20T09:15:00",
  "modified_gmt": "2024-06-20T09:15:00",
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
| source | string | Source of the template part. |
| origin | string | Origin. |
| content | object | Raw and rendered block content. |
| title | object | Raw and rendered title. |
| description | string | Description. |
| author | integer | WordPress user ID. |
| has_theme_file | boolean | Whether it exists as a theme file. |
| is_custom | boolean | Whether it was custom-created. |
| modified | string | Last modified date. |
| modified_gmt | string | GMT last modified date. |
| status | string | Status. Always publish. |
| area | string | Area. Options: header, footer, sidebar, uncategorized. |
| post_types | array | Post types this template part applies to. |
| _links | object | HAL links. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_templates_invalid_id | The template part ID provided is not valid. |
| rest_forbidden | You do not have permission to update template parts. |
| rest_invalid_param | Invalid parameter(s) provided. |
