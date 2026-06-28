## mysql
mysql -u <user> -p -- connect to MySQL as a user
mysql -u <user> -p -e "<sql>" -- execute a SQL statement
mysql -u <user> -p <db> -- connect directly to a database
mysql -u root -p -- connect as root
mysqladmin -u root -p status -- show server status
mysqladmin -u root -p ping -- check if server is alive
mysqladmin -u root -p processlist -- list active threads
mysqldump -u <user> -p <db> -- dump a database to stdout
mysqldump -u <user> -p --all-databases -- dump all databases
mysql -u <user> -p --batch --silent -e "<sql>" -- batch mode output
mysqlcheck --all-databases -- check all tables
sudo systemctl start mysql -- start MySQL service
sudo systemctl stop mysql -- stop MySQL service
sudo systemctl restart mysql -- restart MySQL service
