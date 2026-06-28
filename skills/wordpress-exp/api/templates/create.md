## Create a Template
POST /wp/v2/templates

Create a new block template. Requires authentication with edit_theme_options capability.

## Example Request
```bash
curl -X POST https://example.com/wp-json/wp/v2/templates \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "slug": "custom-landing",
    "title": "Custom Landing Page",
    "description": "A custom landing page template",
    "content": "<!-- wp:cover {\"overlayColor\":\"primary\",\"minHeight\":500} -->\\n<!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Write title...\"} -->\\n<p class=\"has-text-align-center\">Welcome</p>\\n<!-- /wp:paragraph -->\\n<!-- /wp:cover -->",
    "post_types": ["page"]
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| slug | string | **Required.** Template slug unique within the theme. Must not already exist. |
| description | string | Description of the template. |
| title | string | Title of the template. Defaults to the slug if not provided. |
| content | string | **Required.** Block content markup for the template. |
| media | object | Media references associated with the template (experimental). |
| post_types | array | Post types that this template applies to. Default: all supported post types. |
| theme | string | Theme stylesheet to associate the template with. Defaults to the active theme. |

## Response
```json
{
  "id": "twentytwentyfour//custom-landing",
  "slug": "custom-landing",
  "theme": "twentytwentyfour",
  "type": "wp_template",
  "source": "custom",
  "origin": "custom",
  "content": {
    "block_version": 3,
    "raw": "<!-- wp:cover {\\\"overlayColor\\\":\\\"primary\\\",\\\"minHeight\\\":500} -->\\n<!-- wp:paragraph {\\\"align\\\":\\\"center\\\",\\\"placeholder\\\":\\\"Write title...\\\"} -->\\n<p class=\\\"has-text-align-center\\\">Welcome</p>\\n<!-- /wp:paragraph -->\\n<!-- /wp:cover -->",
    "rendered": ""
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
  "post_types": ["page"],
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wp/v2/templates/twentytwentyfour//custom-landing"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/wp/v2/templates"
      }
    ]
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier prefixed with theme slug. |
| slug | string | Template slug unique within the theme. |
| theme | string | Theme stylesheet the template belongs to. |
| type | string | Template type. Always wp_template. |
| source | string | Source of the template. Will be custom. |
| origin | string | Origin from which the template was created. Will be custom. |
| content | object | Raw and rendered block content. |
| title | object | Raw and rendered title. |
| description | string | Description of the template. |
| author | integer | WordPress user ID of the author (current user). |
| has_theme_file | boolean | Whether the template exists as a theme file. |
| is_custom | boolean | Whether the template was custom-created. |
| status | string | Status of the template. Always publish. |
| area | string | Area where the template is used. |
| post_types | array | Post types this template applies to. |
| _links | object | HAL links. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_templates_invalid_id | The template ID is invalid. |
| rest_forbidden | You do not have permission to create templates. |
| rest_invalid_param | Invalid parameter(s) provided. |
