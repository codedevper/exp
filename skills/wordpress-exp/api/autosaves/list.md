## List Autosaves
GET /wp/v2/autosaves/<parent>

Retrieve a paginated list of autosaves for a specific post.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/autosaves/42 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| parent | integer | **Required.** The ID of the parent post. |
| context | string | Scope under which the request is made; determines fields in response. Options: `view`, `embed`, `edit`. Default: `view`. |

## Response
```json
[
  {
    "id": 50,
    "author": 1,
    "date": "2024-12-15T10:35:00",
    "date_gmt": "2024-12-15T10:35:00",
    "guid": {
      "rendered": "https://example.com/?p=42&preview=true"
    },
    "modified": "2024-12-15T10:35:00",
    "modified_gmt": "2024-12-15T10:35:00",
    "parent": 42,
    "slug": "42-autosave-v1",
    "title": {
      "raw": "My Post (Autosave)",
      "rendered": "My Post (Autosave)"
    },
    "content": {
      "raw": "<!-- wp:paragraph --><p>Autosaved content.</p><!-- /wp:paragraph -->",
      "rendered": "<p>Autosaved content.</p>"
    },
    "excerpt": {
      "raw": "",
      "rendered": "<p>Autosaved content.</p>"
    },
    "meta": {}
  }
]
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the autosave. |
| author | integer | The ID of the user who created the autosave. |
| date | string | The date the autosave was created, in site timezone. |
| date_gmt | string | The date the autosave was created, in GMT. |
| guid | object | The globally unique identifier for the autosave. |
| modified | string | The date the autosave was last modified, in site timezone. |
| modified_gmt | string | The date the autosave was last modified, in GMT. |
| parent | integer | The ID of the parent post. |
| slug | string | An alphanumeric identifier for the autosave. |
| title | object | The title of the autosave. |
| content | object | The content of the autosave. |
| excerpt | object | The excerpt of the autosave. |
| meta | object | Meta fields registered for the autosave. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_autosave_invalid_id | Invalid autosave ID or parent post ID. |
| rest_forbidden | You do not have permission to list autosaves. |
