## Update a Template
PUT /wp/v2/templates/<id>

Update an existing block template. Requires authentication with edit_theme_options capability.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/templates/twentytwentyfour%2F%2Fcustom-landing \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Updated Landing Page",
    "description": "An updated landing page template",
    "content": "<!-- wp:cover {\"overlayColor\":\"secondary\",\"minHeight\":600} -->\\n<!-- wp:heading {\"textAlign\":\"center\"} -->\\n<h2 class=\"has-text-align-center\">New Content</h2>\\n<!-- /wp:heading -->\\n<!-- /wp:cover -->",
    "post_types": ["page", "post"]
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | string | **Required.** Template identifier in the format {theme}//{slug}. Must be URL-encoded. |
| description | string | Updated description of the template. |
| title | string | Updated title of the template. |
| content | string | Updated block content markup. |
| media | object | Updated media references (experimental). |
| post_types | array | Updated post types that this template applies to. |

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
    "raw": "<!-- wp:cover {\\\"overlayColor\\\":\\\"secondary\\\",\\\"minHeight\\\":600} -->\\n<!-- wp:heading {\\\"textAlign\\\":\\\"center\\\"} -->\\n<h2 class=\\\"has-text-align-center\\\">New Content</h2>\\n<!-- /wp:heading -->\\n<!-- /wp:cover -->",
    "rendered": ""
  },
  "title": {
    "raw": "Updated Landing Page",
    "rendered": "Updated Landing Page"
  },
  "description": "An updated landing page template",
  "author": 1,
  "has_theme_file": false,
  "is_custom": true,
  "modified": "2024-06-15T14:30:00",
  "modified_gmt": "2024-06-15T14:30:00",
  "status": "publish",
  "area": "uncategorized",
  "post_types": ["page", "post"],
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
| source | string | Source of the template. |
| origin | string | Origin from which the template was created. |
| content | object | Raw and rendered block content. |
| title | object | Raw and rendered title. |
| description | string | Description of the template. |
| author | integer | WordPress user ID of the author. |
| has_theme_file | boolean | Whether the template exists as a theme file. |
| is_custom | boolean | Whether the template was custom-created. |
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
| rest_forbidden | You do not have permission to update templates. |
| rest_invalid_param | Invalid parameter(s) provided. |
