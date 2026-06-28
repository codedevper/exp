## wp role
wp role list [--fields=<fields>] -- list roles (name, label, grant_count)
wp role exists <role> -- check if a role exists
wp role create <role> <display_name> [--clone=<existing_role>] -- create a new role
wp role delete <role> -- delete a role (caps reassigned to subscribers)
wp role reset <role>... -- reset a role to its default capabilities
wp role grant <role> <cap>... -- grant capabilities to a role
wp role revoke <role> <cap>... -- revoke capabilities from a role
