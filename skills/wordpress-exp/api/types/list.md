# List Post Types
GET /wp/v2/types

Retrieves all registered post types.

## Example Request

```bash
curl -X GET https://example.com/wp-json/wp/v2/types \
  -H "Content-Type: application/json"
```

## Request Parameters

| Name | Type | Description |
|------|------|-------------|
| context | string | Scope under which the request is made. Options: `view` (default), `edit`, `embed`. |

## Response

```json
{
  "post": {
    "capabilities": {
      "edit_post": "edit_post",
      "read_post": "read_post",
      "delete_post": "delete_post",
      "edit_posts": "edit_posts",
      "edit_others_posts": "edit_others_posts",
      "publish_posts": "publish_posts",
      "read_private_posts": "read_private_posts",
      "read": "read",
      "delete_posts": "delete_posts",
      "delete_private_posts": "delete_private_posts",
      "delete_published_posts": "delete_published_posts",
      "delete_others_posts": "delete_others_posts",
      "edit_private_posts": "edit_private_posts",
      "edit_published_posts": "edit_published_posts",
      "create_posts": "create_posts"
    },
    "description": "",
    "icon": null,
    "_links": {
      "collection": [
        {
          "href": "https://example.com/wp-json/wp/v2/types"
        }
      ],
      "https://api.w.org/items": [
        {
          "href": "https://example.com/wp-json/wp/v2/posts"
        }
      ]
    },
    "labels": {
      "name": "Posts",
      "singular_name": "Post",
      "add_new": "Add New Post",
      "add_new_item": "Add New Post",
      "edit_item": "Edit Post",
      "new_item": "New Post",
      "view_item": "View Post",
      "view_items": "View Posts",
      "search_items": "Search Posts",
      "not_found": "No posts found.",
      "not_found_in_trash": "No posts found in Trash.",
      "parent_item_colon": null,
      "all_items": "All Posts",
      "archives": "Post Archives",
      "attributes": "Post Attributes",
      "insert_into_item": "Insert into post",
      "uploaded_to_this_item": "Uploaded to this post",
      "featured_image": "Featured image",
      "set_featured_image": "Set featured image",
      "remove_featured_image": "Remove featured image",
      "use_featured_image": "Use featured image",
      "menu_name": "Posts",
      "filter_by_date": "Filter by date",
      "filter_items_list": "Filter posts list",
      "items_list_navigation": "Posts list navigation",
      "items_list": "Posts list",
      "item_published": "Post published.",
      "item_published_privately": "Post published privately.",
      "item_reverted_to_draft": "Post reverted to draft.",
      "item_scheduled": "Post scheduled.",
      "item_updated": "Post updated.",
      "item_link": "Post Link",
      "item_link_description": "A link to a post."
    },
    "name": "Posts",
    "slug": "post",
    "taxonomies": ["category", "post_tag"],
    "rest_base": "posts",
    "viewable": true,
    "hierarchical": false,
    "public": true,
    "show_ui": true,
    "show_in_menu": true,
    "show_in_nav_menus": true,
    "show_in_rest": true,
    "delete_with_user": true
  },
  "page": {
    "capabilities": {
      "edit_page": "edit_page",
      "read_page": "read_page",
      "delete_page": "delete_page",
      "edit_pages": "edit_pages",
      "edit_others_pages": "edit_others_pages",
      "publish_pages": "publish_pages",
      "read_private_pages": "read_private_pages",
      "read": "read",
      "delete_pages": "delete_pages",
      "delete_private_pages": "delete_private_pages",
      "delete_published_pages": "delete_published_pages",
      "delete_others_pages": "delete_others_pages",
      "edit_private_pages": "edit_private_pages",
      "edit_published_pages": "edit_published_pages",
      "create_pages": "create_pages"
    },
    "description": "",
    "icon": null,
    "_links": {
      "collection": [
        {
          "href": "https://example.com/wp-json/wp/v2/types"
        }
      ],
      "https://api.w.org/items": [
        {
          "href": "https://example.com/wp-json/wp/v2/pages"
        }
      ]
    },
    "labels": {
      "name": "Pages",
      "singular_name": "Page",
      "add_new": "Add New Page",
      "add_new_item": "Add New Page",
      "edit_item": "Edit Page",
      "new_item": "New Page",
      "view_item": "View Page",
      "view_items": "View Pages",
      "search_items": "Search Pages",
      "not_found": "No pages found.",
      "not_found_in_trash": "No pages found in Trash.",
      "parent_item_colon": "Parent Page:",
      "all_items": "All Pages",
      "archives": "Page Archives",
      "attributes": "Page Attributes",
      "insert_into_item": "Insert into page",
      "uploaded_to_this_item": "Uploaded to this page",
      "featured_image": "Featured image",
      "set_featured_image": "Set featured image",
      "remove_featured_image": "Remove featured image",
      "use_featured_image": "Use featured image",
      "menu_name": "Pages",
      "filter_by_date": "Filter by date",
      "filter_items_list": "Filter pages list",
      "items_list_navigation": "Pages list navigation",
      "items_list": "Pages list",
      "item_published": "Page published.",
      "item_published_privately": "Page published privately.",
      "item_reverted_to_draft": "Page reverted to draft.",
      "item_scheduled": "Page scheduled.",
      "item_updated": "Page updated.",
      "item_link": "Page Link",
      "item_link_description": "A link to a page."
    },
    "name": "Pages",
    "slug": "page",
    "taxonomies": [],
    "rest_base": "pages",
    "viewable": true,
    "hierarchical": true,
    "public": true,
    "show_ui": true,
    "show_in_menu": true,
    "show_in_nav_menus": true,
    "show_in_rest": true,
    "delete_with_user": true
  }
}
```

## Schema

| Field | Type | Description |
|-------|------|-------------|
| capabilities | object | Map of user capability keys to their readable names. |
| description | string | Description of the post type. |
| icon | string|null | The icon for the post type (dashicon URL or null). |
| _links | object | HAL links for the post type. |
| labels | object | Human-readable labels for the post type. |
| name | string | The plural name of the post type. |
| slug | string | The machine-readable slug of the post type. |
| taxonomies | array | Taxonomies associated with the post type. |
| rest_base | string | The REST API base path for the post type. |
| viewable | boolean | Whether the post type is viewable. |
| hierarchical | boolean | Whether the post type is hierarchical. |
| public | boolean | Whether the post type is publicly accessible. |
| show_ui | boolean | Whether the post type has an admin UI. |
| show_in_menu | boolean | Whether the post type appears in the admin menu. |
| show_in_nav_menus | boolean | Whether the post type appears in navigation menus. |
| show_in_rest | boolean | Whether the post type is exposed via REST API. |
| delete_with_user | boolean | Whether to delete posts of this type when a user is deleted. |

## Error Codes

| Code | Description |
|------|-------------|
| rest_invalid_param | Invalid parameter value. |
