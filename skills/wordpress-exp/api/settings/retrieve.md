# Get Settings
GET /wp/v2/settings

Retrieves the site settings.

## Example Request

```bash
curl -X GET https://example.com/wp-json/wp/v2/settings \
  -H "Content-Type: application/json"
```

## Request Parameters

None.

## Response

```json
{
  "title": "My WordPress Site",
  "description": "Just another WordPress site",
  "url": "https://example.com",
  "email": "admin@example.com",
  "timezone": "UTC",
  "date_format": "F j, Y",
  "time_format": "g:i a",
  "start_of_week": 1,
  "language": "en_US",
  "use_smilies": true,
  "default_category": 1,
  "default_post_format": "standard",
  "posts_per_page": 10,
  "show_on_front": "posts",
  "page_on_front": 0,
  "page_for_posts": 0,
  "default_ping_status": "open",
  "default_comment_status": "open",
  "site_logo": null,
  "site_icon": null
}
```

## Schema

| Field | Type | Description |
|-------|------|-------------|
| title | string | Site title. |
| description | string | Site tagline. |
| url | string | Site URL. |
| email | string | Admin email address. |
| timezone | string | Timezone string (e.g. `UTC`, `America/New_York`). |
| date_format | string | Date format string. |
| time_format | string | Time format string. |
| start_of_week | integer | Day the week starts on (0 = Sunday, 1 = Monday). |
| language | string | Site locale (e.g. `en_US`). |
| use_smilies | boolean | Convert emoticons to smilies. |
| default_category | integer | Default post category ID. |
| default_post_format | string | Default post format. |
| posts_per_page | integer | Number of posts per page. |
| show_on_front | string | What to show on the front page (`posts` or `page`). |
| page_on_front | integer | Front page ID (when `show_on_front` is `page`). |
| page_for_posts | integer | Posts page ID (when `show_on_front` is `page`). |
| default_ping_status | string | Default ping status (`open` or `closed`). |
| default_comment_status | string | Default comment status (`open` or `closed`). |
| site_logo | integer|null | Attachment ID for the site logo. |
| site_icon | integer|null | Attachment ID for the site icon. |

## Error Codes

| Code | Description |
|------|-------------|
| rest_forbidden | The user does not have permission to view settings. |
