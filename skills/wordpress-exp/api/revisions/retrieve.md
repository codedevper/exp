## Retrieve a Revision
GET /wp/v2/revisions/<parent>/<id>

Retrieve a single revision by its parent post ID and revision ID.

## Example Request
```bash
curl -X GET https://example.com/wp-json/wp/v2/revisions/42/45 \
  -H "Content-Type: application/json"
```

## Request Parameters
| Name | Type | Description |
|------|------|-------------|
| parent | integer | **Required.** The ID of the parent post. |
| id | integer | **Required.** The ID of the revision to retrieve. |
| context | string | Scope under which the request is made; determines fields in response. Options: `view`, `embed`, `edit`. Default: `view`. |

## Response
```json
{
  "id": 45,
  "author": 1,
  "date": "2024-12-15T10:30:00",
  "date_gmt": "2024-12-15T10:30:00",
  "guid": {
    "rendered": "https://example.com/?p=42&preview=true"
  },
  "modified": "2024-12-15T10:30:00",
  "modified_gmt": "2024-12-15T10:30:00",
  "parent": 42,
  "slug": "42-revision-v1",
  "title": {
    "raw": "My Post (Revised)",
    "rendered": "My Post (Revised)"
  },
  "content": {
    "raw": "<!-- wp:paragraph --><p>Updated content.</p><!-- /wp:paragraph -->",
    "rendered": "<p>Updated content.</p>"
  },
  "excerpt": {
    "raw": "",
    "rendered": "<p>Updated content.</p>"
  },
  "meta": {}
}
```

## Schema
| Field | Type | Description |
|-------|------|-------------|
| id | integer | Unique identifier for the revision. |
| author | integer | The ID of the user who created the revision. |
| date | string | The date the revision was created, in site timezone. |
| date_gmt | string | The date the revision was created, in GMT. |
| guid | object | The globally unique identifier for the revision. |
| modified | string | The date the revision was last modified, in site timezone. |
| modified_gmt | string | The date the revision was last modified, in GMT. |
| parent | integer | The ID of the parent post. |
| slug | string | An alphanumeric identifier for the revision. |
| title | object | The title of the revision. |
| content | object | The content of the revision. |
| excerpt | object | The excerpt of the revision. |
| meta | object | Meta fields registered for the revision. |

## Error Codes
| Code | Description |
|------|-------------|
| rest_revision_invalid_id | Invalid revision ID or parent post ID. |
| rest_forbidden | You do not have permission to view this revision. |
