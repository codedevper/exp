## apparmor
sudo aa-status -- show AppArmor status
sudo aa-enforce <profile> -- enforce a profile
sudo aa-complain <profile> -- set profile to complain mode
sudo aa-disable <profile> -- disable a profile
sudo aa-audit <profile> -- set profile to audit mode
sudo apparmor_parser -r <file> -- reload profile
sudo apparmor_parser -a <file> -- add new profile
sudo apparmor_parser -R <file> -- remove profile
sudo aa-logprof -- interactive profile generation
sudo aa-genprof <program> -- generate profile for program
sudo aa-autodep <program> -- auto-generate profile
sudo journalctl -f | grep DENIED -- check denied operations
