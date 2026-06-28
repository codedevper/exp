## Retrieve a Block Type
GET /wp/v2/block-types/<namespace>

Retrieve a single block type by its registered name.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/block-types/core/paragraph \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| namespace | string | **Required.** The block type name including namespace (e.g. `core/paragraph`, `core/heading`). |
| context | string | Scope under which the request is made; determines fields in response. Options: `view`, `embed`, `edit`. Default: `view`. |

## Response
```json
{
  "name": "core/paragraph",
  "title": "Paragraph",
  "description": "Add a paragraph of text.",
  "icon": "editor-paragraph",
  "category": "text",
  "keywords": ["text"],
  "parent": [],
  "ancestor": [],
  "styles": [],
  "textdomain": "default",
  "example": {},
  "variations": [],
  "supports": {
    "anchor": true,
    "color": {
      "gradients": true,
      "link": true
    },
    "spacing": {
      "margin": true,
      "padding": true
    },
    "typography": {
      "fontSize": true,
      "lineHeight": true
    }
  },
  "selectors": {
    "root": ".wp-block-paragraph"
  },
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/wp/v2/block-types/core/paragraph"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/wp/v2/block-types"
      }
    ]
  }
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| name | string | Unique name of the block type (e.g. `core/paragraph`). |
| title | string | Human-readable title of the block type. |
| description | string | Human-readable description of the block type. |
| icon | string | Dashicon identifier for the block type. |
| category | string | The block category (e.g. `text`, `media`, `design`). |
| keywords | array | Keywords for search. |
| parent | array | Block types that can contain this block type. |
| ancestor | array | Block types that this block type can be placed within. |
| styles | array | Style variations for the block type. |
| textdomain | string | Text domain for translations. |
| example | object | Example data for previewing the block type. |
| variations | array | Variations of the block type. |
| supports | object | Features supported by the block type. |
| selectors | object | CSS selectors for the block type. |
| _links | object | HATEOAS links to related resources. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_block_type_invalid | Invalid block type. |
| rest_forbidden | You do not have permission to view this block type. |
