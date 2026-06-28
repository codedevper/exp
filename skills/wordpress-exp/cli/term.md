## wp term
wp term list <taxonomy> [--term_id=<id>] [--fields=<fields>] -- list terms in a taxonomy
wp term get <taxonomy> <term> [--field=<field>] -- get a term's details
wp term create <taxonomy> <term> [--slug=<slug>] [--description=<desc>] [--parent=<id>] -- create a term
wp term update <taxonomy> <term> [--<field>=<value>] -- update a term
wp term delete <taxonomy> <term>... -- delete term(s)
wp term generate <taxonomy> [--count=<n>] -- generate terms
wp term meta -- manage term meta (add/get/update/delete)
wp term meta add <id> <key> [<value>] -- add term meta
wp term meta get <id> <key> -- get term meta
wp term meta update <id> <key> <value> -- update term meta
wp term meta delete <id> [<key>] -- delete term meta
wp term recount <taxonomy>... -- recount term counts
