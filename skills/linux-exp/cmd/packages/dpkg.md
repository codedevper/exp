## dpkg
dpkg -i <package.deb> -- install a .deb package
dpkg -r <package> -- remove a package
dpkg -P <package> -- purge a package (remove config too)
dpkg -l [pattern] -- list installed packages matching pattern
dpkg -L <package> -- list files owned by package
dpkg -S <file> -- find which package owns a file
dpkg --configure -a -- reconfigure unpacked packages
dpkg --get-selections -- list installed package selections
dpkg --clear-avail -- erase available packages info
