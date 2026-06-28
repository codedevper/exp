## wp comment
wp comment list [--post=<id>] [--status=<status>] -- list comments
wp comment get <id> -- get a specific comment
wp comment create [--comment_post_ID=<id>] [--comment_content=<text>] -- create a comment
wp comment update <id> -- update a comment (use --<field>=<value>)
wp comment delete <id> [--force] -- delete a comment (trash or force)
wp comment approve <id> -- approve a comment
wp comment unapprove <id> -- unapprove a comment
wp comment spam <id> -- mark as spam
wp comment trash <id> -- trash a comment
wp comment untrash <id> -- untrash a comment
wp comment count -- count comments by status
wp comment meta -- manage comment meta (add/get/update/delete/pluck)
wp comment generate [--count=<n>] [--post_id=<id>] -- generate comments
