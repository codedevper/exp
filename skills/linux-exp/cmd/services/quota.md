## quota
quota -- show current user quotas
quota -s -- show quotas in human-readable format
quota -u <user> -- show quotas for a specific user
quota -g <group> -- show quotas for a specific group
sudo repquota -a -- summarize quotas for all filesystems
sudo repquota -s /dev/sda1 -- summarize quotas on a filesystem (human-readable)
sudo quotacheck -avug -- check and repair quota files
sudo quotaon -avug -- enable quotas on all filesystems
sudo quotaoff -avug -- disable quotas on all filesystems
sudo setquota -u <user> <soft> <hard> <inode_soft> <inode_hard> <fs> -- set quota limits
sudo edquota -u <user> -- edit quota for a user
sudo edquota -g <group> -- edit quota for a group
quotastats -- display quota statistics
sudo warnquota -- send warning emails to users over quota
