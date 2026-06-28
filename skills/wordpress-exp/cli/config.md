## wp config
wp config get [<name>] -- get a wp-config.php constant or variable
wp config set <name> <value> [--type=<type>] [--raw] -- set a config constant/variable
wp config delete <name> -- delete a config constant/variable
wp config has <name> -- check if a config constant/variable exists
wp config list [--list] -- list config constant values
wp config edit <name> <value> -- edit a config value
wp config path -- print the path to wp-config.php
wp config create [--dbname=<name>] [--dbuser=<user>] [--dbpass=<pass>] [--dbhost=<host>] [--dbprefix=<prefix>] -- create wp-config.php from scratch
--type=constant|variable -- whether to set a PHP constant or a global variable
--raw -- treat value as raw (no quotes)
