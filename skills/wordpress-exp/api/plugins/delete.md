## Delete a Plugin
DELETE /wp/v2/plugins/<plugin>

Delete an installed plugin from the site. Requires authentication with delete_plugins capability.

## Example Request
```bash
curl -X DELETE https://example.com/wp-json/wp/v2/plugins/akismet%2Fakismet.php \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| plugin | string | **Required.** Plugin file path relative to the plugins directory, URL-encoded. Example: akismet/akismet.php |

## Response
```json
{
  "deleted": true,
  "previous": {
    "plugin": "akismet/akismet.php",
    "status": "inactive",
    "name": "Akismet Anti-Spam: Spam Protection",
    "plugin_uri": "https://akismet.com/",
    "author": "Automattic",
    "author_uri": "https://automattic.com/",
    "description": "The best anti-spam protection to block spam comments and spam form submissions.",
    "version": "5.3.1",
    "network_only": false,
    "requires_wp": "5.8",
    "requires_php": "5.6.20",
    "textdomain": "akismet"
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| deleted | boolean | Whether the plugin was successfully deleted. |
| previous | object | The plugin data before deletion. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_plugin_invalid_slug | The plugin slug provided is not valid. |
| rest_forbidden | You do not have permission to delete plugins. |
