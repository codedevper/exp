## wp post
wp post list [--post_type=<type>] [--post_status=<status>] [--posts_per_page=<n>] -- list posts
wp post get <id> [--field=<field>] -- get a post's details
wp post create [--post_type=<type>] [--post_title=<title>] [--post_content=<content>] -- create a post
wp post update <id> [--<field>=<value>] -- update a post
wp post delete <id>... [--force] -- delete a post (trash or skip trash)
wp post generate [--count=<n>] [--post_type=<type>] -- generate posts
wp post term -- manage post terms (add/remove/list/set)
wp post term list <id> <taxonomy> -- list terms for a post
wp post term add <id> <taxonomy> <term>... -- add terms to a post
wp post term remove <id> <taxonomy> <term>... -- remove terms from a post
wp post term set <id> <taxonomy> <term>... -- replace all terms for a post
wp post meta -- manage post meta (add/get/update/delete/pluck)
wp post meta add <id> <key> [<value>] -- add post meta
wp post meta get <id> <key> -- get post meta value
wp post meta update <id> <key> <value> -- update post meta
wp post meta delete <id> [<key>] -- delete post meta
wp post meta pluck <id> <key> [--format=<format>] -- pluck meta value
wp post edit <id> -- launch the system editor to edit post content
