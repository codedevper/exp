## wp cache
wp cache add <key> <value> [<group>] [<expire>] -- add a value to the cache
wp cache get <key> [<group>] -- get a cached value
wp cache set <key> <value> [<group>] [<expire>] -- set a cache value (overwrites)
wp cache delete <key> [<group>] -- delete a cached value
wp cache flush [<group>] -- flush the whole cache or a group
wp cache replace <key> <value> [<group>] [<expire>] -- replace an existing cache entry
wp cache incr <key> [<offset>] [<group>] -- increment a numeric cache value
wp cache decr <key> [<offset>] [<group>] -- decrement a numeric cache value
wp cache type -- show the object cache type (Redis/Memcached/internal)
wp cache supports -- list supported cache operations by the drop-in
