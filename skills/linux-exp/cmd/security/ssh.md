## ssh
ssh <user>@<host> -- connect to remote host
ssh -p <port> <user>@<host> -- connect on specific port
ssh -i <keyfile> <user>@<host> -- use identity file
ssh -v <user>@<host> -- verbose mode
ssh -vvv <user>@<host> -- debug mode
ssh -N <user>@<host> -- no remote commands (port forwarding)
ssh -L <local>:<host>:<remote> <user>@<host> -- local port forwarding
ssh -R <remote>:<host>:<local> <user>@<host> -- remote port forwarding
ssh -D <port> <user>@<host> -- SOCKS proxy
ssh -J <jump> <user>@<host> -- jump host
ssh -o "Option Value" <user>@<host> -- set option
ssh -q <user>@<host> -- quiet mode
ssh -t <user>@<host> -- force pseudo-terminal
ssh -4 <user>@<host> -- force IPv4
ssh -6 <user>@<host> -- force IPv6
