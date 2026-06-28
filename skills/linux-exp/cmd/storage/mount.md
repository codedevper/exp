## mount
sudo mount <device> <dir> -- mount device to directory
sudo mount -t <fstype> <device> <dir> -- mount with specific type
sudo mount -o <options> <device> <dir> -- mount with options
sudo mount -a -- mount all fstab entries
sudo mount --bind <olddir> <newdir> -- bind mount
sudo umount <dir> -- unmount
sudo umount -l <dir> -- lazy unmount
sudo umount -f <dir> -- force unmount
mount -l -- list mounted filesystems
mount -t <type> -- list mounts by type
findmnt -- list mount tree
findmnt <dir> -- find mount point
