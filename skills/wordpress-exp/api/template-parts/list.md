## List Template Parts
GET /wp/v2/template-parts

Retrieve a paginated list of block template parts (reusable block areas like headers and footers). Requires authentication with edit_theme_options capability.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/template-parts \
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
| area | string | Limit results to template parts in a specific area. Options: header, footer, sidebar, uncategorized |
| post_type | string | Limit results to template parts for a specific post type. |
| wp_id | integer | Limit results to the template part matching a specific WordPress post ID. |

## Response
```json
[
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
| id | string | Unique identifier in format {theme}//{slug}. |
| slug | string | Template part slug unique within the theme. |
| theme | string | Theme stylesheet the template part belongs to. |
| type | string | Template type. Always wp_template_part. |
| source | string | Source of the template part. Options: theme, custom, plugin. |
| origin | string | Origin from which the template part was created. |
| content | object | Raw and rendered block content. |
| title | object | Raw and rendered title. |
| description | string | Description of the template part. |
| author | integer | WordPress user ID of the author. |
| has_theme_file | boolean | Whether the template part exists as a theme file. |
| is_custom | boolean | Whether the template part was modified from the theme file. |
| modified | string | Date the template part was last modified. |
| modified_gmt | string | GMT date of last modification. |
| status | string | Status. Always publish. |
| area | string | Area where the template part is used. Options: header, footer, sidebar, uncategorized. |
| post_types | array | Post types this template part can be used with. |
| _links | object | HAL links for self, collection, and about (theme). |

## Error Codes
| Code | Description |
|------|-------------|
| rest_forbidden | You do not have permission to view template parts. |
| rest_invalid_param | Invalid parameter(s) provided. |
