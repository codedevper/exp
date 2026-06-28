## List Plugins
GET /wp/v2/plugins

Retrieve a paginated list of installed plugins on the site. Requires authentication with appropriate capabilities (activate_plugins, install_plugins, update_plugins, or delete_plugins depending on the context).

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/plugins \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made; determines fields in response. Options: view, edit. Default: view |
| page | integer | Current page of the collection. Default: 1 |
| per_page | integer | Maximum number of items to be returned in result set. Default: 10 |
| search | string | Limit results to those matching a string. |
| status | string | Limit results to plugins with the given status. Options: active, inactive, all. Default: all |

## Response
```json
[
  {
    "plugin": "hello/hello.php",
    "status": "inactive",
    "name": "Hello Dolly",
    "plugin_uri": "https://wordpress.org/plugins/hello-dolly/",
    "author": "Matt Mullenweg",
    "author_uri": "https://ma.tt/",
    "description": "This is not just a plugin, it symbolizes the hope and enthusiasm of an entire generation summed up in two words sung most famously by Louis Armstrong: Hello, Dolly.",
    "version": "1.7.2",
    "network_only": false,
    "requires_wp": "4.7",
    "requires_php": "5.6",
    "textdomain": "hello-dolly",
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wp/v2/plugins/hello%2Fhello.php"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/wp/v2/plugins"
        }
      ]
    }
  }
]
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| plugin | string | Plugin file path relative to the plugins directory. Example: akismet/akismet.php |
| status | string | Plugin status. One of: active, inactive |
| name | string | Plugin name as defined in the plugin header. |
| plugin_uri | string | Plugin URI as defined in the plugin header. |
| author | string | Plugin author name as defined in the plugin header. |
| author_uri | string | Plugin author URI as defined in the plugin header. |
| description | string | Plugin description as defined in the plugin header. |
| version | string | Plugin version as defined in the plugin header. |
| network_only | boolean | Whether the plugin can only be activated network-wide in a multisite install. |
| requires_wp | string | Minimum WordPress version required. |
| requires_php | string | Minimum PHP version required. |
| textdomain | string | Plugin textdomain for internationalization. |
| _links | object | HAL links for self and collection access. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_forbidden | You do not have permission to view plugins. |
| rest_invalid_param | Invalid parameter(s) provided. |
