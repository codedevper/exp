## dmesg
dmesg -- view kernel ring buffer messages
dmesg -T -- human-readable timestamps
dmesg -l <level> -- filter by level (err,warn,info)
dmesg -x -- show facility and level
dmesg -w -- follow new messages
dmesg -H -- human-readable output
dmesg -L -- colorize output
dmesg -r -- show raw message buffer
dmesg -n <level> -- set console log level
dmesg -c -- clear ring buffer
dmesg --level=err,warn -- show only errors and warnings
sudo dmesg --since "1 hour ago" -- filter by time
