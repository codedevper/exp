## wp search-replace
wp search-replace <old> <new> [<table>...] -- search/replace in the database
wp search-replace <old> <new> --dry-run -- preview changes without writing
wp search-replace <old> <new> --all-tables -- search all tables (not just WP prefix)
wp search-replace <old> <new> --all-tables-with-prefix -- search all tables with WP prefix
wp search-replace <old> <new> --network -- search across a multisite network
wp search-replace <old> <new> --skip-columns=<cols> -- skip specific columns
wp search-replace <old> <new> --include-columns=<cols> -- only include specific columns
wp search-replace <old> <new> --precise -- use PHP (slower) for safer handling
wp search-replace <old> <new> --recurse-objects -- handle serialized objects
wp search-replace <old> <new> --report-changed-only -- only report changed rows
wp search-replace <old> <new> --format=<format> -- output format (table/csv/json/count)
wp search-replace <old> <new> --regex -- treat <old> as a regular expression
