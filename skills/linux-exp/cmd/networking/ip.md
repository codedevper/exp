## ip
ip addr show -- show all IP addresses
ip addr add <cidr> dev <iface> -- add IP address to interface
ip addr del <cidr> dev <iface> -- remove IP address from interface
ip link show -- show all network interfaces
ip link set <iface> up -- bring interface up
ip link set <iface> down -- bring interface down
ip route show -- show routing table
ip route add <cidr> via <gateway> -- add route
ip route del <cidr> -- delete route
ip neigh show -- show ARP/neighbor table
ip netns list -- list network namespaces
ip netns add <name> -- create network namespace
