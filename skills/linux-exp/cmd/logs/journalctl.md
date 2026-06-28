## journalctl
journalctl -- view full journal
journalctl -u <service> -- show logs for specific service
journalctl -f -- follow new log entries (tail -f)
journalctl -n <n> -- show last n lines
journalctl -p <level> -- filter by priority (err,warning,info)
journalctl --since "1 hour ago" -- filter by time
journalctl --until "2024-01-01" -- filter until date
journalctl -k -- show kernel messages
journalctl --list-boots -- list boot sessions
journalctl -b -- current boot logs
journalctl -b -1 -- previous boot logs
journalctl -x -- add explanatory text
journalctl --disk-usage -- show journal disk usage
sudo journalctl --rotate -- rotate journal files
sudo journalctl --vacuum-time=2weeks -- remove old logs
sudo journalctl --vacuum-size=500M -- limit journal size
