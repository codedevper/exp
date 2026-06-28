## passwd
passwd -- change your own password
sudo passwd <user> -- change another user's password
sudo passwd -l <user> -- lock user account
sudo passwd -u <user> -- unlock user account
sudo passwd -d <user> -- delete password (no login)
sudo passwd -e <user> -- force password change on next login
sudo passwd -S <user> -- show password status
sudo passwd -n <days> <user> -- set minimum password age
sudo passwd -x <days> <user> -- set maximum password age
sudo passwd -w <days> <user> -- set warning period
sudo passwd -i <days> <user> -- set inactivity period
