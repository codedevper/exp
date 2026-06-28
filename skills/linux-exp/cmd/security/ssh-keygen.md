## ssh-keygen
ssh-keygen -t rsa -b 4096 -- generate RSA 4096-bit key
ssh-keygen -t ed25519 -- generate Ed25519 key
ssh-keygen -t ecdsa -b 521 -- generate ECDSA key
ssh-keygen -f <file> -- specify output file
ssh-keygen -C "<comment>" -- add comment
ssh-keygen -p -- change passphrase
ssh-keygen -l -f <key> -- show key fingerprint
ssh-keygen -lf <key> -- show key fingerprint (verbose)
ssh-keygen -R <host> -- remove host from known_hosts
ssh-keygen -H -- hash known_hosts
ssh-keygen -F <host> -- find host in known_hosts
ssh-keygen -y -f <key> -- print public key from private
