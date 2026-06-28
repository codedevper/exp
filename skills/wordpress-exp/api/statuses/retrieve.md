# Retrieve a Post Status
GET /wp/v2/statuses/<status>

Retrieves a single post status by its slug.

## Example Request

```bash
curl -X GET https://example.com/wp-json/wp/v2/statuses/publish \
  -H "Content-Type: application/json"
```

## Request Parameters

| Name | Type | Description |
|------|------|-------------|
| status | string | **Required.** The slug of the post status to retrieve (e.g. `publish`, `draft`, `pending`). |
| context | string | Scope under which the request is made. Options: `view` (default), `edit`, `embed`. |

## Response

```json
{
  "name": "Published",
  "private": false,
  "protected": false,
  "public": true,
  "queryable": true,
  "show_in_list": true,
  "slug": "publish",
  "date_floating": false,
  "_links": {
    "archives": [
      {
        "href": "https://example.com/wp-json/wp/v2/posts"
      }
    ]
  }
}
```

## Schema

| Field | Type | Description |
|-------|------|-------------|
| name | string | The human-readable name of the status. |
| private | boolean | Whether the status is private (posts require read permission). |
| protected | boolean | Whether the status is password-protected. |
| public | boolean | Whether posts with this status are publicly visible. |
| queryable | boolean | Whether posts with this status can be queried via `WP_Query`. |
| show_in_list | boolean | Whether the status can be shown in the admin list table. |
| slug | string | The machine-readable slug of the status. |
| date_floating | boolean | Whether the status allows floating dates. |
| _links | object | HAL links for the status. |

## Error Codes

| Code | Description |
|------|-------------|
| rest_status_invalid_id | The status slug provided does not match any registered status. |
| rest_invalid_param | Invalid parameter value. |
