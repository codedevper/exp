## systemctl
sudo systemctl start <service> -- start a service
sudo systemctl stop <service> -- stop a service
sudo systemctl restart <service> -- restart a service
sudo systemctl reload <service> -- reload config without restart
sudo systemctl enable <service> -- enable on boot
sudo systemctl disable <service> -- disable on boot
sudo systemctl status <service> -- show service status
sudo systemctl is-active <service> -- check if active
sudo systemctl is-enabled <service> -- check if enabled
systemctl list-units -- list all active units
systemctl list-units --all -- list all units (including inactive)
systemctl list-unit-files -- list all unit files and states
systemctl --failed -- list failed units
systemctl daemon-reload -- reload systemd config
sudo systemctl mask <service> -- mask a service
sudo systemctl unmask <service> -- unmask a service
