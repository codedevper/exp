## Retrieve Global Styles
GET /wp/v2/global-styles/<id>

Retrieve the global styles configuration for a given theme. The ID is typically the theme stylesheet identifier.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/global-styles/twentytwentyfour \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | string | **Required.** The theme stylesheet identifier (e.g. `twentytwentyfour`, `astra`). |
| context | string | Scope under which the request is made; determines fields in response. Options: `view`, `embed`, `edit`. Default: `view`. |

## Response
```json
{
  "id": 12,
  "title": {
    "rendered": "Twenty Twenty-Four Styles"
  },
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "base",
          "color": "#f9f9f9",
          "name": "Base"
        },
        {
          "slug": "contrast",
          "color": "#111111",
          "name": "Contrast"
        }
      ],
      "gradients": [],
      "custom": true,
      "linkColor": true
    },
    "layout": {
      "contentSize": "620px",
      "wideSize": "1200px"
    },
    "typography": {
      "fontFamilies": [
        {
          "slug": "system",
          "name": "System",
          "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        }
      ],
      "fontSizes": [
        {
          "slug": "small",
          "size": "13px",
          "name": "Small"
        },
        {
          "slug": "medium",
          "size": "20px",
          "name": "Medium"
        }
      ]
    }
  },
  "styles": {
    "color": {
      "background": "var(--wp--preset--color--base)",
      "text": "var(--wp--preset--color--contrast)"
    },
    "elements": {
      "link": {
        "color": {
          "text": "var(--wp--preset--color--contrast)"
        }
      }
    },
    "spacing": {
      "padding": {
        "top": "0",
        "right": "0",
        "bottom": "0",
        "left": "0"
      }
    }
  },
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wp/v2/global-styles/twentytwentyfour"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/wp/v2/global-styles"
      }
    ]
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the global styles object. |
| title | object | Title of the global styles configuration. |
| settings | object | Theme.json settings including color palette, typography, and layout configuration (maps to CSS custom properties). |
| styles | object | Theme.json styles including color, spacing, typography CSS rules. |
| _links | object | HATEOAS links to related resources. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_global_styles_invalid_id | Invalid global styles ID. |
| rest_forbidden | You do not have permission to view global styles. |
