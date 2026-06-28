## top
top -- interactive process viewer (refresh every 3s)
top -u <user> -- show only user's processes
top -p <pid> -- monitor specific PIDs
top -b -n 1 -- batch mode, one iteration
top -b -n 5 > file.txt -- batch to file
top -H -- show individual threads
top -d <s> -- set refresh delay
top -o %MEM -- sort by memory
top -o %CPU -- sort by CPU (default)
htop -- enhanced interactive viewer
