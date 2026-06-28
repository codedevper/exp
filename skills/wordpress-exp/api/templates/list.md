## List Templates
GET /wp/v2/templates

Retrieve a paginated list of block templates (from the Block Editor). Requires authentication with edit_theme_options capability.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/templates \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Options: view, edit. Default: view |
| page | integer | Current page of the collection. Default: 1 |
| per_page | integer | Maximum number of items to be returned in result set. Default: 10 |
| search | string | Limit results to those matching a string. |
| area | string | Limit results to templates in a specific area. Options: header, footer, sidebar, uncategorized |
| post_type | string | Limit results to templates for a specific post type. Example: post, page, wp_block |
| wp_id | integer | Limit results to the template matching a specific WordPress post ID. |

## Response
```json
[
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
      ],
      "about": [
        {
          "href": "https://example.com/wp-json/wp/v2/themes/twentytwentyfour"
        }
      ]
    }
  }
]
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier prefixed with theme slug. Format: {theme}//{slug} |
| slug | string | Template slug unique within the theme. |
| theme | string | Theme stylesheet the template belongs to. |
| type | string | Template type. Always wp_template. |
| source | string | Source of the template. Options: theme, custom, plugin. |
| origin | string | Origin from which the template was created. Options: theme, custom, plugin. |
| content | object | Raw and rendered block content of the template. |
| title | object | Raw and rendered title of the template. |
| description | string | Description of the template. |
| author | integer | WordPress user ID of the author. |
| has_theme_file | boolean | Whether the template exists as a file in the theme directory. |
| is_custom | boolean | Whether the template has been modified from the theme file. |
| modified | string | Date the template was last modified. |
| modified_gmt | string | GMT date the template was last modified. |
| status | string | Status of the template. Always publish. |
| area | string | Area where the template is used. Options: header, footer, sidebar, uncategorized. |
| post_types | array | Post types that this template can be used with. |
| _links | object | HAL links for self, collection, and about (theme). |

## Error Codes
| Code | Description |
|------|-------------|
| rest_forbidden | You do not have permission to view templates. |
| rest_invalid_param | Invalid parameter(s) provided. |
