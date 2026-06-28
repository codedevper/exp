## tail
tail <file> -- show last 10 lines
tail -n <n> <file> -- show last n lines
tail -f <file> -- follow file (watch new lines)
tail -F <file> -- follow with rotation detection
tail -q <file> -- quiet (no headers)
tail -v <file> -- verbose (show filename header)
tail -c <n> <file> -- show last n bytes
tail -n +<n> <file> -- show from line n onward
tail -f <file1> <file2> -- follow multiple files
