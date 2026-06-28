---
name: wordpress-exp
description: Reference for working with the WordPress API and Plugins — all available commands organized by category.
---

# WordPress EXP Skill

This skill provides a reference for working with the WordPress REST API. It documents all available API endpoints organized by resource category.

## Available Commands

### Posts
- **list** — `GET /wp/v2/posts` — Retrieve a collection of posts
- **create** — `POST /wp/v2/posts` — Create a new post
- **retrieve** — `GET /wp/v2/posts/<id>` — Retrieve a specific post
- **update** — `PUT /wp/v2/posts/<id>` — Update a specific post
- **delete** — `DELETE /wp/v2/posts/<id>` — Delete a specific post

### Pages
- **list** — `GET /wp/v2/pages` — Retrieve a collection of pages
- **create** — `POST /wp/v2/pages` — Create a new page
- **retrieve** — `GET /wp/v2/pages/<id>` — Retrieve a specific page
- **update** — `PUT /wp/v2/pages/<id>` — Update a specific page
- **delete** — `DELETE /wp/v2/pages/<id>` — Delete a specific page

### Media
- **list** — `GET /wp/v2/media` — Retrieve a collection of media items
- **create** — `POST /wp/v2/media` — Upload a new media item
- **retrieve** — `GET /wp/v2/media/<id>` — Retrieve a specific media item
- **update** — `PUT /wp/v2/media/<id>` — Update a specific media item
- **delete** — `DELETE /wp/v2/media/<id>` — Delete a specific media item

### Users
- **list** — `GET /wp/v2/users` — Retrieve a collection of users
- **create** — `POST /wp/v2/users` — Create a new user
- **retrieve** — `GET /wp/v2/users/<id>` — Retrieve a specific user
- **update** — `PUT /wp/v2/users/<id>` — Update a specific user
- **delete** — `DELETE /wp/v2/users/<id>` — Delete a specific user
- **me** — `GET /wp/v2/users/me` — Retrieve the currently authenticated user

### Comments
- **list** — `GET /wp/v2/comments` — Retrieve a collection of comments
- **create** — `POST /wp/v2/comments` — Create a new comment
- **retrieve** — `GET /wp/v2/comments/<id>` — Retrieve a specific comment
- **update** — `PUT /wp/v2/comments/<id>` — Update a specific comment
- **delete** — `DELETE /wp/v2/comments/<id>` — Delete a specific comment

### Categories
- **list** — `GET /wp/v2/categories` — Retrieve a collection of categories
- **create** — `POST /wp/v2/categories` — Create a new category
- **retrieve** — `GET /wp/v2/categories/<id>` — Retrieve a specific category
- **update** — `PUT /wp/v2/categories/<id>` — Update a specific category
- **delete** — `DELETE /wp/v2/categories/<id>` — Delete a specific category

### Tags
- **list** — `GET /wp/v2/tags` — Retrieve a collection of tags
- **create** — `POST /wp/v2/tags` — Create a new tag
- **retrieve** — `GET /wp/v2/tags/<id>` — Retrieve a specific tag
- **update** — `PUT /wp/v2/tags/<id>` — Update a specific tag
- **delete** — `DELETE /wp/v2/tags/<id>` — Delete a specific tag

### Taxonomies
- **list** — `GET /wp/v2/taxonomies` — Retrieve a collection of taxonomies
- **retrieve** — `GET /wp/v2/taxonomies/<taxonomy>` — Retrieve a specific taxonomy

### Post Types
- **list** — `GET /wp/v2/types` — Retrieve a collection of post types
- **retrieve** — `GET /wp/v2/types/<post_type>` — Retrieve a specific post type

### Post Statuses
- **list** — `GET /wp/v2/statuses` — Retrieve a collection of post statuses
- **retrieve** — `GET /wp/v2/statuses/<status>` — Retrieve a specific post status

### Settings
- **retrieve** — `GET /wp/v2/settings` — Retrieve site settings
- **update** — `PUT /wp/v2/settings` — Update site settings

### Search
- **list** — `GET /wp/v2/search` — Search across post types and other content

### Plugins
- **list** — `GET /wp/v2/plugins` — Retrieve a collection of plugins
- **create** — `POST /wp/v2/plugins` — Install a new plugin
- **retrieve** — `GET /wp/v2/plugins/<plugin>` — Retrieve a specific plugin
- **update** — `PUT /wp/v2/plugins/<plugin>` — Update a specific plugin
- **delete** — `DELETE /wp/v2/plugins/<plugin>` — Delete a specific plugin

### Themes
- **list** — `GET /wp/v2/themes` — Retrieve a collection of themes
- **retrieve** — `GET /wp/v2/themes/<stylesheet>` — Retrieve a specific theme

### Templates
- **list** — `GET /wp/v2/templates` — Retrieve a collection of templates
- **create** — `POST /wp/v2/templates` — Create a new template
- **retrieve** — `GET /wp/v2/templates/<id>` — Retrieve a specific template
- **update** — `PUT /wp/v2/templates/<id>` — Update a specific template
- **delete** — `DELETE /wp/v2/templates/<id>` — Delete a specific template

### Template Parts
- **list** — `GET /wp/v2/template-parts` — Retrieve a collection of template parts
- **create** — `POST /wp/v2/template-parts` — Create a new template part
- **retrieve** — `GET /wp/v2/template-parts/<id>` — Retrieve a specific template part
- **update** — `PUT /wp/v2/template-parts/<id>` — Update a specific template part
- **delete** — `DELETE /wp/v2/template-parts/<id>` — Delete a specific template part

### Navigation
- **list** — `GET /wp/v2/navigation` — Retrieve a collection of navigation menus
- **create** — `POST /wp/v2/navigation` — Create a new navigation menu
- **retrieve** — `GET /wp/v2/navigation/<id>` — Retrieve a specific navigation menu
- **update** — `PUT /wp/v2/navigation/<id>` — Update a specific navigation menu
- **delete** — `DELETE /wp/v2/navigation/<id>` — Delete a specific navigation menu

### Menu Locations
- **list** — `GET /wp/v2/menu-locations` — Retrieve a collection of menu locations
- **retrieve** — `GET /wp/v2/menu-locations/<location>` — Retrieve a specific menu location

### Global Styles
- **retrieve** — `GET /wp/v2/global-styles/<id>` — Retrieve global styles
- **update** — `PUT /wp/v2/global-styles/<id>` — Update global styles

### Revisions
- **list** — `GET /wp/v2/revisions/<parent>` — Retrieve a collection of revisions for a post
- **retrieve** — `GET /wp/v2/revisions/<parent>/<id>` — Retrieve a specific revision
- **delete** — `DELETE /wp/v2/revisions/<parent>/<id>` — Delete a specific revision

### Autosaves
- **list** — `GET /wp/v2/autosaves/<parent>` — Retrieve a collection of autosaves
- **create** — `POST /wp/v2/autosaves/<parent>` — Create a new autosave
- **retrieve** — `GET /wp/v2/autosaves/<parent>/<id>` — Retrieve a specific autosave

### Block Types
- **list** — `GET /wp/v2/block-types` — Retrieve a collection of block types
- **retrieve** — `GET /wp/v2/block-types/<namespace>` — Retrieve a specific block type

### Application Passwords
- **list** — `GET /wp/v2/application-passwords` — Retrieve a collection of application passwords
- **create** — `POST /wp/v2/application-passwords` — Create a new application password
- **retrieve** — `GET /wp/v2/application-passwords/<uuid>` — Retrieve a specific application password
- **update** — `PUT /wp/v2/application-passwords/<uuid>` — Update a specific application password
- **delete** — `DELETE /wp/v2/application-passwords/<uuid>` — Delete a specific application password
