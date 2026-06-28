## kill
kill <pid> -- send SIGTERM (graceful stop)
kill -9 <pid> -- send SIGKILL (force kill)
kill -15 <pid> -- send SIGTERM (default)
kill -1 <pid> -- send SIGHUP (reload config)
kill -2 <pid> -- send SIGINT (Ctrl+C)
kill -3 <pid> -- send SIGQUIT
kill -0 <pid> -- test if process exists
kill -l -- list all signal names
killall <name> -- kill all processes by name
killall -9 <name> -- force kill all by name
pkill <pattern> -- kill by pattern
pkill -f <pattern> -- kill matching full command line
pkill -u <user> -- kill all user's processes
