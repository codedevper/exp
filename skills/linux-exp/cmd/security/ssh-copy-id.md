## ssh-copy-id
ssh-copy-id <user>@<host> -- copy default public key to host
ssh-copy-id -i <keyfile> <user>@<host> -- copy specific key
ssh-copy-id -p <port> <user>@<host> -- specify port
ssh-copy-id -f <user>@<host> -- force copy even if key exists
ssh-copy-id -n <user>@<host> -- dry run
ssh-copy-id -o <option> <user>@<host> -- pass SSH options
