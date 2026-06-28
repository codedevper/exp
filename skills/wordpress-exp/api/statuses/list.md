# List Post Statuses
GET /wp/v2/statuses

Retrieves all registered post statuses.

## Example Request

```bash
curl -X GET https://example.com/wp-json/wp/v2/statuses \
  -H "Content-Type: application/json"
```

## Request Parameters

| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Options: `view` (default), `edit`, `embed`. |

## Response

```json
{
  "publish": {
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
  },
  "future": {
    "name": "Scheduled",
    "private": false,
    "protected": false,
    "public": false,
    "queryable": false,
    "show_in_list": true,
    "slug": "future",
    "date_floating": false,
    "_links": {
      "archives": [
        {
          "href": "https://example.com/wp-json/wp/v2/posts"
        }
      ]
    }
  },
  "draft": {
    "name": "Draft",
    "private": false,
    "protected": false,
    "public": false,
    "queryable": false,
    "show_in_list": true,
    "slug": "draft",
    "date_floating": false,
    "_links": {
      "archives": [
        {
          "href": "https://example.com/wp-json/wp/v2/posts"
        }
      ]
    }
  },
  "pending": {
    "name": "Pending",
    "private": false,
    "protected": false,
    "public": false,
    "queryable": false,
    "show_in_list": true,
    "slug": "pending",
    "date_floating": false,
    "_links": {
      "archives": [
        {
          "href": "https://example.com/wp-json/wp/v2/posts"
        }
      ]
    }
  },
  "private": {
    "name": "Private",
    "private": true,
    "protected": false,
    "public": false,
    "queryable": true,
    "show_in_list": true,
    "slug": "private",
    "date_floating": false,
    "_links": {
      "archives": [
        {
          "href": "https://example.com/wp-json/wp/v2/posts"
        }
      ]
    }
  },
  "trash": {
    "name": "Trash",
    "private": false,
    "protected": false,
    "public": false,
    "queryable": false,
    "show_in_list": true,
    "slug": "trash",
    "date_floating": false,
    "_links": {
      "archives": [
        {
          "href": "https://example.com/wp-json/wp/v2/posts"
        }
      ]
    }
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
| rest_invalid_param | Invalid parameter value. |
