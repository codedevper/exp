## Get a Plugin
GET /wp/v2/plugins/<plugin>

Retrieve a single installed plugin by its plugin file path. Requires authentication with appropriate capabilities.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/plugins/akismet%2Fakismet.php \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| plugin | string | **Required.** Plugin file path relative to the plugins directory, URL-encoded. Example: akismet/akismet.php (encoded as akismet%2Fakismet.php) |
| context | string | Scope under which the request is made. Options: view, edit. Default: view |

## Response
```json
{
  "plugin": "akismet/akismet.php",
  "status": "active",
  "name": "Akismet Anti-Spam: Spam Protection",
  "plugin_uri": "https://akismet.com/",
  "author": "Automattic",
  "author_uri": "https://automattic.com/",
  "description": "The best anti-spam protection to block spam comments and spam form submissions.",
  "version": "5.3.1",
  "network_only": false,
  "requires_wp": "5.8",
  "requires_php": "5.6.20",
  "textdomain": "akismet",
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wp/v2/plugins/akismet%2Fakismet.php"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/wp/v2/plugins"
      }
    ]
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| plugin | string | Plugin file path relative to the plugins directory. |
| status | string | Plugin status. One of: active, inactive |
| name | string | Plugin name as defined in the plugin header. |
| plugin_uri | string | Plugin URI as defined in the plugin header. |
| author | string | Plugin author name as defined in the plugin header. |
| author_uri | string | Plugin author URI as defined in the plugin header. |
| description | string | Plugin description as defined in the plugin header. |
| version | string | Plugin version. |
| network_only | boolean | Whether the plugin can only be activated network-wide. |
| requires_wp | string | Minimum WordPress version required. |
| requires_php | string | Minimum PHP version required. |
| textdomain | string | Plugin textdomain. |
| _links | object | HAL links for self and collection access. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_plugin_invalid_slug | The plugin slug provided is not valid. |
| rest_forbidden | You do not have permission to view plugins. |
