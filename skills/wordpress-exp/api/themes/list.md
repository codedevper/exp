## List Themes
GET /wp/v2/themes

Retrieve a paginated list of installed themes on the site. Requires authentication with appropriate capabilities for non-active themes.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/themes \
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
| status | string | Limit results to themes with the given status. Options: active, inactive. Default: active |

## Response
```json
[
  {
    "stylesheet": "twentytwentyfour",
    "template": "twentytwentyfour",
    "author": "the WordPress team",
    "author_uri": "https://wordpress.org/",
    "description": "Created to deliver a site with a clean, professional look and feel.",
    "name": "Twenty Twenty-Four",
    "requires_php": "7.0",
    "requires_wp": "6.4",
    "screenshot": "https://example.com/wp-content/themes/twentytwentyfour/screenshot.png",
    "tags": ["blog", "portfolio", "one-column"],
    "textdomain": "twentytwentyfour",
    "theme_supports": {
      "align-wide": true,
      "automatic-feed-links": true,
      "custom-logo": true,
      "html5": true,
      "post-thumbnails": true,
      "responsive-embeds": true,
      "title-tag": true
    },
    "theme_uri": "https://wordpress.org/themes/twentytwentyfour/",
    "version": "1.1",
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wp/v2/themes/twentytwentyfour"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/wp/v2/themes"
        }
      ]
    }
  }
]
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| stylesheet | string | Theme stylesheet name (directory slug). |
| template | string | Parent theme template name if it is a child theme. |
| author | string | Theme author name. |
| author_uri | string | Theme author URI. |
| description | string | Theme description. |
| name | string | Theme name. |
| requires_php | string | Minimum PHP version required. |
| requires_wp | string | Minimum WordPress version required. |
| screenshot | string | URL to the theme screenshot image. |
| tags | array | Theme tags. |
| textdomain | string | Theme textdomain for internationalization. |
| theme_supports | object | Features supported by the theme. |
| theme_uri | string | Theme URI. |
| version | string | Theme version. |
| _links | object | HAL links for self and collection access. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_theme_invalid_stylesheet | The stylesheet provided is not valid. |
| rest_forbidden | You do not have permission to view themes. |
| rest_invalid_param | Invalid parameter(s) provided. |
