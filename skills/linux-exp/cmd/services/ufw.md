## ufw
sudo ufw enable -- enable firewall
sudo ufw disable -- disable firewall
sudo ufw status -- show firewall status
sudo ufw status verbose -- detailed status
sudo ufw status numbered -- show rules with numbers
sudo ufw allow <port> -- allow port
sudo ufw allow <port>/<proto> -- allow port/protocol
sudo ufw deny <port> -- deny port
sudo ufw reject <port> -- reject port
sudo ufw allow from <ip> -- allow from IP
sudo ufw allow from <ip> to any port <port> -- allow IP on port
sudo ufw delete <num> -- delete rule by number
sudo ufw default deny incoming -- deny all incoming
sudo ufw default allow outgoing -- allow all outgoing
sudo ufw logging on -- enable logging
sudo ufw app list -- list app profiles
sudo ufw allow "<app>" -- allow by app profile
