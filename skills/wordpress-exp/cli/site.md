## wp site
wp site list [--network=<id>] [--public=<bool>] [--archived=<bool>] [--deleted=<bool>] [--spam=<bool>] -- list multisite sites
wp site get <id> -- get site details
wp site create [--slug=<slug>] [--title=<title>] [--email=<email>] [--network_id=<id>] -- create a new site
wp site delete [<id>...] [--force] [--slug=<slug>] -- delete a site
wp site activate <id>... -- activate a site
wp site deactivate <id>... -- deactivate a site
wp site archive <id>... -- archive a site
wp site unarchive <id>... -- unarchive a site
wp site mature <id>... -- mark a site as mature
wp site option -- manage site-specific options (add/get/update/delete)
wp site option get <key> [--field=<field>] -- get a site option
wp site option set <key> <value> -- set a site option
wp site option list [--format=<format>] -- list all site options
wp site spam <id>... -- mark a site as spam
wp site empty [--uploads] [--yes] -- empty a site's posts/comments/terms
wp site switch-to-user <id> -- switch to a user for a given site
