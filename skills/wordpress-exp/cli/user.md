## wp user
wp user list [--role=<role>] [--field=<field>] [--orderby=<field>] -- list users
wp user get <user> [--field=<field>] -- get a user's details
wp user create <user> <email> [--role=<role>] [--user_pass=<pass>] [--display_name=<name>] -- create a user
wp user update <user> [--<field>=<value>] -- update a user
wp user delete <user>... [--reassign=<user>] [--network] [--yes] -- delete a user
wp user generate [--count=<n>] [--role=<role>] -- generate users
wp user meta -- manage user meta (add/get/update/delete/pluck)
wp user meta add <user> <key> [<value>] -- add user meta
wp user meta get <user> <key> -- get user meta
wp user meta update <user> <key> <value> -- update user meta
wp user meta delete <user> [<key>] -- delete user meta
wp user term -- manage user terms (add/remove/list/set)
wp user session destroy <user>... [--all] -- destroy user sessions
wp user check-password <user> <password> -- check a user's password
wp user list --field=display_name -- list just the display names
wp user import-csv <file> [--skip-update] -- bulk import users from CSV
