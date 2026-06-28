## ss
ss -tuln -- show listening TCP/UDP ports
ss -tup -- show TCP connections with processes
ss -s -- show socket statistics
ss -l -- show all listening sockets
ss -a -- show all sockets
ss -e -- show detailed socket info
ss -p -- show process using socket
ss -4 -- show only IPv4 sockets
ss -6 -- show only IPv6 sockets
ss -t dst <ip> -- show TCP connections to specific IP
ss state established -- show established connections
