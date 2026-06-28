## wp plugin
wp plugin list [--status=<status>] [--field=<field>] -- list installed plugins
wp plugin get <plugin> -- get a plugin's details
wp plugin path [<plugin>] -- get the path to a plugin (or plugins directory)
wp plugin install <plugin|zip|url>... [--version=<version>] [--activate] [--force] -- install plugin(s)
wp plugin update <plugin>... [--version=<version>] [--dry-run] -- update plugin(s)
wp plugin activate <plugin>... [--network] -- activate plugin(s)
wp plugin deactivate <plugin>... [--network] -- deactivate plugin(s)
wp plugin delete <plugin>... -- delete plugin(s)
wp plugin toggle <plugin>... -- toggle activation status
wp plugin status <plugin> -- check plugin status (active/inactive/network-active)
wp plugin uninstall <plugin>... -- uninstall plugin(s) (removes data)
wp plugin auto-updates list -- list auto-update status for plugins
wp plugin auto-updates enable <plugin>... -- enable auto-updates
wp plugin auto-updates disable <plugin>... -- disable auto-updates
--all -- apply command to all plugins
--skip-plugins -- skip all plugins when running a command
