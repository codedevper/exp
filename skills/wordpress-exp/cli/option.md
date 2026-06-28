## wp option
wp option list [--search=<pattern>] [--autoload=<value>] -- list options
wp option get <name> [--format=<format>] -- get an option value
wp option add <name> <value> [--autoload=<value>] -- add a new option
wp option update <name> <value> [--autoload=<value>] -- update an existing option
wp option delete <name> -- delete an option
wp option pluck <name> <key> [--format=<format>] -- get a nested key from a serialized option
wp option patch insert <name> <key> <value> -- insert into a nested option array
wp option patch update <name> <key> <value> -- update a nested value in an option
wp option patch delete <name> <key> -- delete a nested value from an option
--format=json|yaml|csv|table -- output format
