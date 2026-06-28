## grep
grep <pattern> <file> -- search for pattern
grep -i <pattern> <file> -- case-insensitive search
grep -r <pattern> <dir> -- recursive search
grep -v <pattern> <file> -- invert match (exclude)
grep -c <pattern> <file> -- count matches
grep -n <pattern> <file> -- show line numbers
grep -l <pattern> <files> -- list filenames with matches
grep -L <pattern> <files> -- list filenames without matches
grep -w <pattern> <file> -- match whole word only
grep -x <pattern> <file> -- match whole line
grep -A <n> <pattern> <file> -- show n lines after match
grep -B <n> <pattern> <file> -- show n lines before match
grep -C <n> <pattern> <file> -- show n lines context
grep -E <pattern> <file> -- extended regex
grep -P <pattern> <file> -- Perl-compatible regex
grep -q <pattern> <file> -- quiet (exit code only)
