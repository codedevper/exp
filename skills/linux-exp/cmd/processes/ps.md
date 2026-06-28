## ps
ps aux -- list all processes (BSD style)
ps -ef -- list all processes (standard style)
ps -u <user> -- list user's processes
ps -p <pid> -- show specific process
ps -C <command> -- show by command name
ps -U <user> -u <user> -- show real/effective user
ps -L <pid> -- show threads of process
ps -eo pid,user,cmd,%cpu,%mem -- custom output columns
ps aux --sort=-%mem -- sort by memory usage
ps aux --sort=-%cpu -- sort by CPU usage
ps -o pid,parent,cmd -- show parent PID
ps --forest -- show process tree
pstree -- show process tree
