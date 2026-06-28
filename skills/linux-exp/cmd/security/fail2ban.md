## fail2ban
sudo systemctl status fail2ban -- check fail2ban status
sudo fail2ban-client status -- show all jails
sudo fail2ban-client status <jail> -- show jail status
sudo fail2ban-client set <jail> banip <ip> -- manually ban IP
sudo fail2ban-client set <jail> unbanip <ip> -- manually unban IP
sudo fail2ban-client reload -- reload config
sudo fail2ban-client restart -- restart fail2ban
sudo fail2ban-client ping -- check if running
sudo fail2ban-client start -- start fail2ban
sudo fail2ban-client stop -- stop fail2ban
sudo fail2ban-client set <jail> findtime <sec> -- set find time
sudo fail2ban-client set <jail> maxretry <num> -- set max retries
sudo fail2ban-client set <jail> bantime <sec> -- set ban time
