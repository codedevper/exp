## wp cron
wp cron event list [--schedule=<schedule>] [--due-now] -- list scheduled cron events
wp cron event run <hook>... [--due-now] -- run specific cron events
wp cron event schedule <hook> [<next_run>] [<schedule>] -- schedule a new event
wp cron event unschedule <hook> [<before>] -- unschedule all instances of a hook
wp cron event delete <hook> -- delete all events for a hook
wp cron schedule list -- list registered cron schedules
wp cron event list --fields=hook,next_run_relative,schedule -- show schedule info at a glance
wp cron test -- test the WP-Cron spawning system
