## List Navigation Menus
GET /wp/v2/navigation

Retrieve a paginated list of navigation menu objects registered in the WordPress site.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/navigation \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made; determines fields in response. Options: `view`, `embed`, `edit`. Default: `view`. |
| page | integer | Current page of the collection. Default: `1`. |
| per_page | integer | Maximum number of items to be returned in result set. Default: `10`. |
| search | string | Limit results to those matching a string. |
| exclude | array | Ensure result set excludes specific IDs. |
| include | array | Limit result set to specific IDs. |
| order | string | Order sort attribute ascending or descending. Options: `asc`, `desc`. Default: `desc`. |
| orderby | string | Sort collection by object attribute. Options: `date`, `id`, `include`, `title`, `slug`. Default: `date`. |
| slug | string | Limit result set to navigation menus with one or more specific slugs. |
| status | string | Limit result set to navigation menus with one or more specific statuses. Options: `publish`, `future`, `draft`, `pending`, `private`. Default: `publish`. |

## Response
```json
[
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
]
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
| rest_invalid_param | Invalid parameter(s) passed. |
| rest_forbidden | You do not have permission to list navigation menus. |
