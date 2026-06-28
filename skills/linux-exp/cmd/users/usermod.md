## usermod
sudo usermod -aG <group> <user> -- add user to supplementary group
sudo usermod -l <new> <old> -- change username
sudo usermod -d <dir> <user> -- change home directory
sudo usermod -m -d <dir> <user> -- move home dir to new location
sudo usermod -s <shell> <user> -- change login shell
sudo usermod -L <user> -- lock user account
sudo usermod -U <user> -- unlock user account
sudo usermod -e <date> <user> -- set account expiry date
sudo usermod -g <group> <user> -- change primary group
sudo usermod -u <uid> <user> -- change user UID
