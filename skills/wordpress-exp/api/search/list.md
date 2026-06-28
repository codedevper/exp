# Search
GET /wp/v2/search

Searches for content across the site.

## Example Request

```bash
curl -X GET "https://example.com/wp-json/wp/v2/search?search=hello+world" \
  -H "Content-Type: application/json"
```

## Request Parameters

| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Options: `view` (default), `embed`. |
| page | integer | Current page of the collection (default `1`). |
| per_page | integer | Maximum number of items to return (default `10`). |
| search | string | **Required.** Search term to find matching content. |
| type | string | Limit results to a specific object type. Options: `post`, `term`, `post-format`. Default: `post`. |
| subtype | string | Limit results to a specific subtype (e.g. a post type slug like `post` or `page`). |
| status | string | Limit results to a specific post status (e.g. `publish`, `draft`). |

## Response

```json
[
  {
    "id": 1,
    "title": "Hello World!",
    "url": "https://example.com/hello-world/",
    "type": "post",
    "subtype": "post",
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wp/v2/posts/1"
        }
      ],
      "about": [
        {
          "href": "https://example.com/wp-json/wp/v2/types/post"
        }
      ]
    }
  },
  {
    "id": 42,
    "title": "Hello from Pages",
    "url": "https://example.com/hello-from-pages/",
    "type": "post",
    "subtype": "page",
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/wp/v2/pages/42"
        }
      ],
      "about": [
        {
          "href": "https://example.com/wp-json/wp/v2/types/page"
        }
      ]
    }
  }
]
```

## Schema

| Field | Type | Description |
|-------|------|-------------|
| id | integer | The unique identifier for the object. |
| title | string | The title of the matched content. |
| url | string | The permalink URL to the matched content. |
| type | string | The object type (`post`, `term`, `post-format`). |
| subtype | string | The object subtype (e.g. `post`, `page`, `category`). |
| _links | object | HAL links to the object and its type schema. |

## Error Codes

| Code | Description |
|------|-------------|
| rest_search_not_available | The search endpoint is not available on this site. |
| rest_invalid_param | Invalid parameter value. |
| rest_forbidden | The user does not have permission to access search results. |
