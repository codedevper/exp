## Get a Template
GET /wp/v2/templates/<id>

Retrieve a single block template by its ID. The ID is a combination of theme slug and template slug separated by //. Requires authentication with edit_theme_options capability.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/templates/twentytwentyfour%2F%2Findex \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | string | **Required.** Template identifier in the format {theme}//{slug}. Must be URL-encoded. Example: twentytwentyfour//index (encoded as twentytwentyfour%2F%2Findex) |
| context | string | Scope under which the request is made. Options: view, edit. Default: view |

## Response
```json
{
  "id": "twentytwentyfour//index",
  "slug": "index",
  "theme": "twentytwentyfour",
  "type": "wp_template",
  "source": "theme",
  "origin": "theme",
  "content": {
    "block_version": 3,
    "raw": "<!-- wp:template-part {\"slug\":\"header\"} /-->\\n<!-- wp:group {\"layout\":{\"type\":\"constrained\"}} -->\\n<!-- wp:post-content /-->\\n<!-- /wp:group -->\\n<!-- wp:template-part {\"slug\":\"footer\"} /-->",
    "rendered": ""
  },
  "title": {
    "raw": "Index",
    "rendered": "Index"
  },
  "description": "The default template for displaying all posts and pages.",
  "author": 0,
  "has_theme_file": true,
  "is_custom": false,
  "modified": "2024-01-15T10:30:00",
  "modified_gmt": "2024-01-15T10:30:00",
  "status": "publish",
  "area": "uncategorized",
  "post_types": ["post", "page"],
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wp/v2/templates/twentytwentyfour//index"
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
| source | string | Source of the template. Options: theme, custom, plugin. |
| origin | string | Origin from which the template was created. |
| content | object | Raw and rendered block content. |
| title | object | Raw and rendered title. |
| description | string | Description of the template. |
| author | integer | WordPress user ID of the author. |
| has_theme_file | boolean | Whether the template exists as a theme file. |
| is_custom | boolean | Whether the template was modified from the theme file. |
| modified | string | Date the template was last modified. |
| modified_gmt | string | GMT date of last modification. |
| status | string | Status of the template. Always publish. |
| area | string | Area where the template is used. |
| post_types | array | Post types this template applies to. |
| _links | object | HAL links. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_templates_invalid_id | The template ID provided is not valid. |
| rest_forbidden | You do not have permission to view this template. |
