## sudo
sudo <command> -- run command as root
sudo -u <user> <command> -- run as specific user
sudo -i -- interactive root shell
sudo -s -- shell with root (preserves env)
sudo -l -- list user's privileges
sudo -v -- validate cached credentials
sudo -k -- invalidate cached credentials
sudo -K -- remove cached credentials entirely
sudo -E -- preserve environment variables
sudo -H -- set HOME to target user's home
sudo -b -- run command in background
sudo -p <prompt> -- custom password prompt
sudo -e <file> -- edit file as root
sudo -u <user> -s -- shell as user
sudo !!-- re-run last command with sudo
