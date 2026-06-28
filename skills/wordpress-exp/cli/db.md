## wp db
wp db create -- create the database (from wp-config.php credentials)
wp db drop -- drop the database (dangerous)
wp db reset -- drop and recreate the database (dangerous)
wp db check [<table>] -- check database tables
wp db repair [<table>] -- repair database tables
wp db optimize [<table>] -- optimize database tables
wp db size [--tables] [--human-readable] -- show database/tables sizes
wp db tables [--prefix] [--scope=<scope>] -- list tables matching the prefix
wp db query <sql> [--csv] [--table] -- execute an SQL query
wp db export [<file>] -- export the database (SQL file)
wp db import <file> -- import a database (dangerous)
wp db search <string> [<tables>...] -- search the database for a string
wp db cli -- open the MySQL CLI connected to the WP database
wp db columns <table> -- list columns in a table
