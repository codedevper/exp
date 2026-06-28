## Get a Template Part
GET /wp/v2/template-parts/<id>

Retrieve a single block template part by its ID. Requires authentication with edit_theme_options capability.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/template-parts/twentytwentyfour%2F%2Fheader \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | string | **Required.** Template part identifier in the format {theme}//{slug}. Must be URL-encoded. Example: twentytwentyfour//header |
| context | string | Scope under which the request is made. Options: view, edit. Default: view |

## Response
```json
{
  "id": "twentytwentyfour//header",
  "slug": "header",
  "theme": "twentytwentyfour",
  "type": "wp_template_part",
  "source": "theme",
  "origin": "theme",
  "content": {
    "block_version": 3,
    "raw": "<!-- wp:group {\"layout\":{\"type\":\"constrained\"}} -->\\n<!-- wp:site-title /-->\\n<!-- wp:site-tagline /-->\\n<!-- /wp:group -->",
    "rendered": ""
  },
  "title": {
    "raw": "Header",
    "rendered": "Header"
  },
  "description": "Site header template part",
  "author": 0,
  "has_theme_file": true,
  "is_custom": false,
  "modified": "2024-01-15T10:30:00",
  "modified_gmt": "2024-01-15T10:30:00",
  "status": "publish",
  "area": "header",
  "post_types": ["post", "page"],
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wp/v2/template-parts/twentytwentyfour//header"
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
| source | string | Source. Options: theme, custom, plugin. |
| origin | string | Origin. |
| content | object | Raw and rendered block content. |
| title | object | Raw and rendered title. |
| description | string | Description. |
| author | integer | WordPress user ID. |
| has_theme_file | boolean | Whether it exists as a theme file. |
| is_custom | boolean | Whether it was modified from the theme file. |
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
| rest_forbidden | You do not have permission to view this template part. |
