## Update a Navigation Menu
PUT /wp/v2/navigation/<id>

Update an existing navigation menu object.

## Example Request
```bash
curl -X PUT https://example.com/wp-json/wp/v2/navigation/3 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Updated Navigation",
    "content": "<!-- wp:navigation-link {\"label\":\"Home\",\"url\":\"/\",\"kind\":\"custom\",\"isTopLevelLink\":true} /--><!-- wp:navigation-link {\"label\":\"Contact\",\"url\":\"/contact\",\"kind\":\"custom\",\"isTopLevelLink\":true} /-->",
    "status": "publish"
  }'
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | **Required.** The ID of the navigation menu to update. |
| title | string | The title of the navigation menu. |
| content | string | The HTML block content of the navigation menu (block markup). |
| status | string | The status of the navigation menu. Options: `publish`, `draft`. |
| slug | string | An alphanumeric identifier for the navigation menu. |
| meta | object | Meta fields registered for the navigation menu. |

## Response
```json
{
  "id": 3,
  "title": {
    "rendered": "Updated Navigation"
  },
  "content": {
    "raw": "<!-- wp:navigation-link {\"label\":\"Home\",\"url\":\"/\",\"kind\":\"custom\",\"isTopLevelLink\":true} /--><!-- wp:navigation-link {\"label\":\"Contact\",\"url\":\"/contact\",\"kind\":\"custom\",\"isTopLevelLink\":true} /-->",
    "rendered": "<a class=\"wp-block-navigation-item__content\" href=\"/\">Home</a><a class=\"wp-block-navigation-item__content\" href=\"/contact\">Contact</a>"
  },
  "status": "publish",
  "slug": "updated-navigation",
  "meta": {},
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wp/v2/navigation/3"
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
| rest_forbidden | You do not have permission to update this navigation menu. |
