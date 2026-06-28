## Retrieve a Menu Location
GET /wp/v2/menu-locations/<location>

Retrieve a single menu location object by its location identifier.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/menu-locations/primary \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| location | string | **Required.** The location identifier (e.g. `primary`, `footer`, `social`). |
| context | string | Scope under which the request is made; determines fields in response. Options: `view`, `embed`, `edit`. Default: `view`. |

## Response
```json
{
  "name": "Primary Menu",
  "description": "The primary navigation menu for the site header.",
  "menu": 3
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
| rest_menu_location_invalid | Invalid menu location. |
| rest_forbidden | You do not have permission to view this menu location. |
