---
name: wordpress-exp
description: "Reference for working with the WordPress REST API and WP-CLI — all available endpoints and CLI commands organized by category. Use when you need to look up REST API routes, WP-CLI command syntax/flags, or plugin-specific documentation for WooCommerce or BuddyPress."
---

# WordPress EXP Skill

This skill provides references for working with WordPress:

- **REST API** — endpoints organized by resource category
- **WP-CLI** — command references with subcommands and flags
- **Plugins** — plugin-specific documentation (WooCommerce, BuddyPress)

## REST API Endpoints

### Posts
- **list** — `GET /wp/v2/posts`
- **create** — `POST /wp/v2/posts`
- **retrieve** — `GET /wp/v2/posts/<id>`
- **update** — `PUT /wp/v2/posts/<id>`
- **delete** — `DELETE /wp/v2/posts/<id>`

### Pages
- **list** — `GET /wp/v2/pages`
- **create** — `POST /wp/v2/pages`
- **retrieve** — `GET /wp/v2/pages/<id>`
- **update** — `PUT /wp/v2/pages/<id>`
- **delete** — `DELETE /wp/v2/pages/<id>`

### Media
- **list** — `GET /wp/v2/media`
- **create** — `POST /wp/v2/media`
- **retrieve** — `GET /wp/v2/media/<id>`
- **update** — `PUT /wp/v2/media/<id>`
- **delete** — `DELETE /wp/v2/media/<id>`

### Users
- **list** — `GET /wp/v2/users`
- **create** — `POST /wp/v2/users`
- **retrieve** — `GET /wp/v2/users/<id>`
- **update** — `PUT /wp/v2/users/<id>`
- **delete** — `DELETE /wp/v2/users/<id>`
- **me** — `GET /wp/v2/users/me`

### Comments
- **list** — `GET /wp/v2/comments`
- **create** — `POST /wp/v2/comments`
- **retrieve** — `GET /wp/v2/comments/<id>`
- **update** — `PUT /wp/v2/comments/<id>`
- **delete** — `DELETE /wp/v2/comments/<id>`

### Categories
- **list** — `GET /wp/v2/categories`
- **create** — `POST /wp/v2/categories`
- **retrieve** — `GET /wp/v2/categories/<id>`
- **update** — `PUT /wp/v2/categories/<id>`
- **delete** — `DELETE /wp/v2/categories/<id>`

### Tags
- **list** — `GET /wp/v2/tags`
- **create** — `POST /wp/v2/tags`
- **retrieve** — `GET /wp/v2/tags/<id>`
- **update** — `PUT /wp/v2/tags/<id>`
- **delete** — `DELETE /wp/v2/tags/<id>`

### Taxonomies
- **list** — `GET /wp/v2/taxonomies`
- **retrieve** — `GET /wp/v2/taxonomies/<taxonomy>`

### Post Types
- **list** — `GET /wp/v2/types`
- **retrieve** — `GET /wp/v2/types/<post_type>`

### Post Statuses
- **list** — `GET /wp/v2/statuses`
- **retrieve** — `GET /wp/v2/statuses/<status>`

### Settings
- **retrieve** — `GET /wp/v2/settings`
- **update** — `PUT /wp/v2/settings`

### Search
- **list** — `GET /wp/v2/search`

### Plugins
- **list** — `GET /wp/v2/plugins`
- **create** — `POST /wp/v2/plugins`
- **retrieve** — `GET /wp/v2/plugins/<plugin>`
- **update** — `PUT /wp/v2/plugins/<plugin>`
- **delete** — `DELETE /wp/v2/plugins/<plugin>`

### Themes
- **list** — `GET /wp/v2/themes`
- **retrieve** — `GET /wp/v2/themes/<stylesheet>`

### Templates
- **list** — `GET /wp/v2/templates`
- **create** — `POST /wp/v2/templates`
- **retrieve** — `GET /wp/v2/templates/<id>`
- **update** — `PUT /wp/v2/templates/<id>`
- **delete** — `DELETE /wp/v2/templates/<id>`

### Template Parts
- **list** — `GET /wp/v2/template-parts`
- **create** — `POST /wp/v2/template-parts`
- **retrieve** — `GET /wp/v2/template-parts/<id>`
- **update** — `PUT /wp/v2/template-parts/<id>`
- **delete** — `DELETE /wp/v2/template-parts/<id>`

### Navigation
- **list** — `GET /wp/v2/navigation`
- **create** — `POST /wp/v2/navigation`
- **retrieve** — `GET /wp/v2/navigation/<id>`
- **update** — `PUT /wp/v2/navigation/<id>`
- **delete** — `DELETE /wp/v2/navigation/<id>`

### Menu Locations
- **list** — `GET /wp/v2/menu-locations`
- **retrieve** — `GET /wp/v2/menu-locations/<location>`

### Global Styles
- **retrieve** — `GET /wp/v2/global-styles/<id>`
- **update** — `PUT /wp/v2/global-styles/<id>`

### Revisions
- **list** — `GET /wp/v2/revisions/<parent>`
- **retrieve** — `GET /wp/v2/revisions/<parent>/<id>`
- **delete** — `DELETE /wp/v2/revisions/<parent>/<id>`

### Autosaves
- **list** — `GET /wp/v2/autosaves/<parent>`
- **create** — `POST /wp/v2/autosaves/<parent>`
- **retrieve** — `GET /wp/v2/autosaves/<parent>/<id>`

### Block Types
- **list** — `GET /wp/v2/block-types`
- **retrieve** — `GET /wp/v2/block-types/<namespace>`

### Application Passwords
- **list** — `GET /wp/v2/application-passwords`
- **create** — `POST /wp/v2/application-passwords`
- **retrieve** — `GET /wp/v2/application-passwords/<uuid>`
- **update** — `PUT /wp/v2/application-passwords/<uuid>`
- **delete** — `DELETE /wp/v2/application-passwords/<uuid>`

## WP-CLI Commands

Reference docs for each command. Read `cli/<command>.md` for full subcommand/flags details.

### Installing & Configuring
- `wp core` — [download/install/update WordPress](cli/core.md)
- `wp config` — [manage wp-config.php](cli/config.md)
- `wp cli` — [manage WP-CLI itself](cli/cli.md)
- `wp server` — [launch the dev server](cli/server.md)
- `wp shell` — [interactive PHP console](cli/shell.md)

### Content Management
- `wp post` — [manage posts and post meta](cli/post.md)
- `wp comment` — [manage comments](cli/comment.md)
- `wp media` — [import files and regenerate thumbnails](cli/media.md)
- `wp menu` — [manage navigation menus](cli/menu.md)
- `wp widget` — [manage widgets](cli/widget.md)
- `wp sidebar` — [list registered sidebars](cli/sidebar.md)
- `wp block` — [manage blocks](cli/block.md)

### Taxonomy & Terms
- `wp taxonomy` — [inspect registered taxonomies](cli/taxonomy.md)
- `wp term` — [manage taxonomy terms](cli/term.md)
- `wp post-type` — [inspect registered post types](cli/post-type.md)
- `wp category` — (use `wp term list category`)

### Users & Roles
- `wp user` — [manage users, meta, sessions](cli/user.md)
- `wp role` — [manage user roles and capabilities](cli/role.md)
- `wp cap` — [manage capabilities](cli/cap.md)
- `wp super-admin` — [manage multisite super admins](cli/super-admin.md)

### Database & Search-Replace
- `wp db` — [manage the database](cli/db.md)
- `wp search-replace` — [search/replace strings in the DB](cli/search-replace.md)

### Plugins, Themes & Packages
- `wp plugin` — [install/activate/update/delete plugins](cli/plugin.md)
- `wp theme` — [install/activate/update/delete themes](cli/theme.md)
- `wp package` — [manage WP-CLI packages](cli/package.md)
- `wp language` — [manage language packs](cli/language.md)

### Options & Cache
- `wp option` — [manage site options](cli/option.md)
- `wp cache` — [manage the object cache](cli/cache.md)
- `wp transient` — [manage transients](cli/transient.md)

### Multisite
- `wp site` — [manage sites on a network](cli/site.md)
- `wp network` — [manage network meta](cli/network.md)

### Cron & Maintenance
- `wp cron` — [manage cron events](cli/cron.md)
- `wp maintenance-mode` — [toggle maintenance mode](cli/maintenance-mode.md)

### Rewrites & Embed
- `wp rewrite` — [manage permalink rules](cli/rewrite.md)
- `wp embed` — [manage oEmbed cache and providers](cli/embed.md)

### Code Generation
- `wp scaffold` — [generate code for themes/plugins/CPTs](cli/scaffold.md)
- `wp dist-archive` — [create distribution archives](cli/dist-archive.md)

### Import/Export
- `wp export` — [export content to WXR](cli/export.md)
- `wp import` — [import content from WXR](cli/import.md)

### Debugging & Introspection
- `wp eval` — [execute arbitrary PHP](cli/eval.md)
- `wp eval-file` — [execute a PHP file](cli/eval-file.md)
- `wp profile` — [profile WordPress performance](cli/profile.md)
- `wp find` — [find WP installations](cli/find.md)
- `wp help` — [get command help](cli/help.md)

### Internationalization
- `wp i18n` — [POT/PO/MO/JSON translation tools](cli/i18n.md)

### Other
- `wp ability` — [inspect the Abilities API](cli/ability.md)
- `wp admin` — [open wp-admin in browser](cli/admin.md)
