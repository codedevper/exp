## wp scaffold
wp scaffold plugin <name> [--plugin_name=<name>] [--skip-tests] -- generate a plugin skeleton
wp scaffold theme <name> [--theme_name=<name>] [--activate] -- generate a theme skeleton
wp scaffold child-theme <name> --parent=<slug> [--theme_name=<name>] -- generate a child theme
wp scaffold post-type <slug> [--label=<label>] [--theme_name=<theme>] [--plugin_name=<plugin>] -- generate CPT code
wp scaffold taxonomy <slug> [--label=<label>] [--post_types=<types>] -- generate taxonomy code
wp scaffold block <name> [--title=<title>] --register [--theme] -- generate a block
wp scaffold package-tests <name> [--dir=<dir>] -- scaffold WP-CLI package test suite
wp scaffold _s <name> [--theme_name=<name>] [--activate] -- generate based on _s (underscores)
wp scaffold block-supports -- scaffold block supports configuration
