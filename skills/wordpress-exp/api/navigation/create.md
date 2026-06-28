## Create a Navigation Menu
POST /wp/v2/navigation

Create a new navigation menu object with HTML block content.

## Example Request
```bash
curl -X POST https://example.com/wp-json/wp/v2/navigation \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Main Navigation",
    "content": "<!-- wp:navigation-link {\"label\":\"Home\",\"url\":\"/\",\"kind\":\"custom\",\"isTopLevelLink\":true} /--><!-- wp:navigation-link {\"label\":\"About\",\"url\":\"/about\",\"kind\":\"custom\",\"isTopLevelLink\":true} /-->",
    "status": "publish"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| title | string | **Required.** The title of the navigation menu. |
| content | string | **Required.** The HTML block content of the navigation menu (block markup). |
| status | string | The status of the navigation menu. Options: `publish`, `draft`. Default: `draft`. |
| slug | string | An alphanumeric identifier for the navigation menu. |
| meta | object | Meta fields registered for the navigation menu. |

## Response
```json
{
  "id": 5,
  "title": {
    "rendered": "Main Navigation"
  },
  "content": {
    "raw": "<!-- wp:navigation-link {\"label\":\"Home\",\"url\":\"/\",\"kind\":\"custom\",\"isTopLevelLink\":true} /--><!-- wp:navigation-link {\"label\":\"About\",\"url\":\"/about\",\"kind\":\"custom\",\"isTopLevelLink\":true} /-->",
    "rendered": "<a class=\"wp-block-navigation-item__content\" href=\"/\">Home</a><a class=\"wp-block-navigation-item__content\" href=\"/about\">About</a>"
  },
  "status": "publish",
  "slug": "main-navigation",
  "meta": {},
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wp/v2/navigation/5"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/wp/v2/navigation"
      }
    ]
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the navigation menu. |
| title | object | Title of the navigation menu (rendered and/or raw). |
| content | object | Content of the navigation menu with raw (HTML blocks) and rendered fields. |
| status | string | A named status for the navigation menu. |
| slug | string | An alphanumeric identifier for the navigation menu. |
| meta | object | Meta fields registered for the navigation menu. |
| _links | object | HATEOAS links to related resources. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_navigation_invalid_id | Invalid navigation menu ID. |
| rest_invalid_param | Invalid parameter(s) passed. |
| rest_forbidden | You do not have permission to create navigation menus. |
