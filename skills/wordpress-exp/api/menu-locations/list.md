## List Menu Locations
GET /wp/v2/menu-locations

Retrieve all registered menu locations for the current theme.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/menu-locations \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made; determines fields in response. Options: `view`, `embed`, `edit`. Default: `view`. |

## Response
```json
{
  "primary": {
    "name": "Primary Menu",
    "description": "The primary navigation menu for the site header.",
    "menu": 3
  },
  "footer": {
    "name": "Footer Menu",
    "description": "The navigation menu displayed in the site footer.",
    "menu": 0
  },
  "social": {
    "name": "Social Menu",
    "description": "A menu for social media links.",
    "menu": 0
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| name | string | Display name of the menu location. |
| description | string | Human-readable description of the menu location. |
| menu | integer | ID of the navigation menu assigned to this location, or `0` if none. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_forbidden | You do not have permission to view menu locations. |
