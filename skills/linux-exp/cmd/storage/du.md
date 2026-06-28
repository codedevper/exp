## du
du -h <dir> -- human-readable directory size
du -sh <dir> -- summary size of directory
du -h --max-depth=<n> <dir> -- limit depth
du -h -c <dir> -- total with grand total
du -h --exclude=<pattern> <dir> -- exclude matches
du -h --time <dir> -- show last modification time
du -h -d 1 <dir> -- one level depth
du -h -a <dir> -- show all files (not just dirs)
du -h -s * | sort -rh -- sort by size
