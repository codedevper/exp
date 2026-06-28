## wget
wget <url> -- download file
wget -O <file> <url> -- save as specific filename
wget -c <url> -- resume interrupted download
wget -q <url> -- quiet mode
wget -P <dir> <url> -- save to directory
wget -r <url> -- recursive download
wget -l <depth> <url> -- recursion depth
wget -np <url> -- no parent directories
wget -A <ext> <url> -- accept list of extensions
wget --limit-rate=<rate> <url> -- limit download speed
wget --user=<user> --password=<pass> <url> -- HTTP auth
wget -i <file> -- download URLs from file
