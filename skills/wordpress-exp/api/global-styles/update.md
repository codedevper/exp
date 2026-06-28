## Update Global Styles
PUT /wp/v2/global-styles/<id>

Update the global styles configuration for a given theme.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/global-styles/twentytwentyfour \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "settings": {
      "color": {
        "palette": [
          {
            "slug": "base",
            "color": "#ffffff",
            "name": "Base"
          },
          {
            "slug": "contrast",
            "color": "#000000",
            "name": "Contrast"
          }
        ]
      }
    },
    "styles": {
      "color": {
        "background": "#ffffff",
        "text": "#000000"
      }
    }
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | string | **Required.** The theme stylesheet identifier (e.g. `twentytwentyfour`). |
| settings | object | Theme.json settings including color palette, typography, and layout. |
| styles | object | Theme.json styles including color, spacing, and typography CSS rules. |

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
          "color": "#ffffff",
          "name": "Base"
        },
        {
          "slug": "contrast",
          "color": "#000000",
          "name": "Contrast"
        }
      ]
    }
  },
  "styles": {
    "color": {
      "background": "#ffffff",
      "text": "#000000"
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
| settings | object | Theme.json settings including color palette, typography, and layout configuration. |
| styles | object | Theme.json styles including color, spacing, typography CSS rules. |
| _links | object | HATEOAS links to related resources. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_global_styles_invalid_id | Invalid global styles ID. |
| rest_invalid_param | Invalid parameter(s) passed. |
| rest_forbidden | You do not have permission to update global styles. |
