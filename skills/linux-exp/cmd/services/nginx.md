## nginx
sudo nginx -- start Nginx
sudo nginx -s stop -- stop Nginx
sudo nginx -s quit -- graceful shutdown
sudo nginx -s reload -- reload configuration
sudo nginx -s reopen -- reopen log files
sudo nginx -t -- test configuration
sudo nginx -T -- test and print config
sudo nginx -V -- show version and build info
sudo nginx -c <file> -- use custom config file
sudo systemctl status nginx -- check Nginx status
sudo journalctl -u nginx -f -- follow Nginx logs
