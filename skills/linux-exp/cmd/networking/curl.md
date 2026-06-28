## curl
curl <url> -- fetch URL content
curl -o <file> <url> -- save output to file
curl -O <url> -- save with remote filename
curl -L <url> -- follow redirects
curl -I <url> -- fetch headers only
curl -H "Header: value" <url> -- set custom header
curl -d "key=value" <url> -- POST form data
curl -X POST <url> -- POST request
curl -u user:pass <url> -- basic auth
curl -k <url> -- allow insecure SSL
curl -v <url> -- verbose output
curl -s <url> -- silent mode
curl --connect-timeout <sec> <url> -- connection timeout
