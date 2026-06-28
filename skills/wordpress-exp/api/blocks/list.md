## List Block Types
GET /wp/v2/block-types

Retrieve a paginated list of registered block types.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/block-types \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made; determines fields in response. Options: `view`, `embed`, `edit`. Default: `view`. |
| page | integer | Current page of the collection. Default: `1`. |
| per_page | integer | Maximum number of items to be returned in result set. Default: `10`. |
| search | string | Limit results to those matching a string. |
| namespace | string | Limit result set to blocks within a specific namespace (e.g. `core`). |

## Response
```json
[
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
  },
  {
    "name": "core/heading",
    "title": "Heading",
    "description": "Add a heading with levels from H2 to H6.",
    "icon": "heading",
    "category": "text",
    "keywords": ["title", "subtitle"],
    "parent": [],
    "ancestor": [],
    "styles": [],
    "textdomain": "default",
    "example": {},
    "variations": [],
    "supports": {
      "anchor": true,
      "color": true,
      "typography": {
        "fontSize": true,
        "lineHeight": true
      }
    },
    "selectors": {
      "root": ".wp-block-heading"
    },
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wp/v2/block-types/core/heading"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/wp/v2/block-types"
        }
      ]
    }
  }
]
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
| rest_invalid_param | Invalid parameter(s) passed. |
