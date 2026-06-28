## redis
redis-cli -- connect to Redis (default localhost:6379)
redis-cli -h <host> -p <port> -- connect to a specific host/port
redis-cli ping -- check if Redis is alive
redis-cli SET <key> <value> -- set a key value
redis-cli GET <key> -- get value by key
redis-cli DEL <key> -- delete a key
redis-cli KEYS <pattern> -- find keys matching a pattern
redis-cli FLUSHALL -- delete all keys
redis-cli INFO -- show server info
redis-cli MONITOR -- stream all commands in real time
redis-cli --scan -- iterate over keys
redis-cli SAVE -- create a snapshot
redis-cli BGSAVE -- create a snapshot in background
sudo systemctl start redis-server -- start Redis service
sudo systemctl stop redis-server -- stop Redis service
