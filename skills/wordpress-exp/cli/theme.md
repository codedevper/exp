## wp theme
wp theme list [--status=<status>] [--field=<field>] -- list installed themes
wp theme get <theme> [--field=<field>] -- get a theme's details
wp theme path [<theme>] -- get the path to a theme (or themes directory)
wp theme install <theme|zip|url>... [--version=<version>] [--activate] [--force] -- install theme(s)
wp theme update <theme>... [--version=<version>] [--dry-run] -- update theme(s)
wp theme activate <theme> [--network] -- activate a theme
wp theme delete <theme>... -- delete theme(s)
wp theme status <theme> -- check theme status
wp theme mod list [<theme>] -- list theme mods
wp theme mod set <key> <value> [<theme>] -- set a theme mod
wp theme mod get <key> [<theme>] -- get a theme mod
wp theme mod remove <key> [<theme>] -- remove a theme mod
wp theme auto-updates list -- list auto-update status for themes
wp theme auto-updates enable <theme>... -- enable auto-updates
wp theme auto-updates disable <theme>... -- disable auto-updates
wp theme enable <theme> -- enable a theme (for network)
wp theme disable <theme> -- disable a theme (for network)
wp theme is-active <theme> -- check if a theme is active
wp theme is-installed <theme> -- check if a theme is installed
