## visudo
sudo visudo -- edit /etc/sudoers (with syntax check)
sudo visudo -f <file> -- edit custom file in sudoers.d
sudo visudo -c -- check syntax only (no edit)
sudo visudo -s -- strict mode
sudo visudo -q -- quiet mode
sudo visudo -x > file -- export in JSON format
sudo visudo -x --export -- export sudoers in JSON
EDITOR=nano sudo visudo -- use specific editor
EDITOR=vim sudo visudo -- use vim as editor
