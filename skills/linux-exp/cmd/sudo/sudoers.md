## sudoers

File: /etc/sudoers (edit with visudo only)

user  ALL=(ALL:ALL) ALL -- grant full sudo to user
%group ALL=(ALL:ALL) ALL -- grant full sudo to group
user  ALL=(ALL:ALL) NOPASSWD: ALL -- passwordless sudo
user  hostname=(ALL) ALL -- restrict to specific host
user  ALL=(ALL:ALL) /bin/kill -- allow specific command
user  ALL=(ALL:ALL) !/bin/kill -- deny specific command
Defaults env_reset -- reset environment
Defaults timestamp_timeout=5 -- credential cache timeout (min)
Defaults mail_badpass -- mail on bad password
Defaults logfile=/var/log/sudo.log -- log to specific file
Defaults secure_path="/usr/local/sbin:..." -- secure PATH
Cmnd_Alias SERVICES = /usr/bin/systemctl * -- define alias
user  ALL=(ALL) SERVICES -- use command alias
