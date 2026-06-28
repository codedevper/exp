## apache2
sudo apache2ctl start -- start Apache
sudo apache2ctl stop -- stop Apache
sudo apache2ctl restart -- restart Apache
sudo apache2ctl graceful -- graceful restart
sudo apache2ctl configtest -- test configuration
sudo apache2ctl -S -- show virtual host config
sudo apache2ctl -M -- list loaded modules
sudo apache2ctl -V -- show version and build
sudo apache2ctl -L -- list available directives
sudo systemctl status apache2 -- check Apache status
sudo journalctl -u apache2 -f -- follow Apache logs

## a2ensite
sudo a2ensite <site> -- enable an Apache site
sudo a2ensite <site> --quiet -- quiet mode
sudo a2dissite <site> -- disable an Apache site
sudo a2dissite <site> --quiet -- quiet mode
sudo a2enmod <module> -- enable Apache module
sudo a2dismod <module> -- disable Apache module
sudo a2enconf <conf> -- enable Apache config
sudo a2disconf <conf> -- disable Apache config
sudo systemctl reload apache2 -- reload after changes
