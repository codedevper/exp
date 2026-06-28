## Retrieve a Navigation Menu
GET /wp/v2/navigation/<id>

Retrieve a single navigation menu object by its ID.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/navigation/3 \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| id | integer | **Required.** The ID of the navigation menu to retrieve. |
| context | string | Scope under which the request is made; determines fields in response. Options: `view`, `embed`, `edit`. Default: `view`. |

## Response
```json
{
  "id": 3,
  "title": {
    "rendered": "Main Navigation"
  },
  "content": {
    "raw": "<!-- wp:navigation-link {\"label\":\"Home\",\"url\":\"/\",\"kind\":\"custom\",\"isTopLevelLink\":true} /-->",
    "rendered": "<a class=\"wp-block-navigation-item__content\" href=\"/\">Home</a>"
  },
  "status": "publish",
  "slug": "main-navigation",
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
| rest_forbidden | You do not have permission to retrieve this navigation menu. |
