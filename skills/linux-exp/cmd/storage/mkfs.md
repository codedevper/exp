## mkfs
sudo mkfs.ext4 <device> -- create ext4 filesystem
sudo mkfs.ext3 <device> -- create ext3 filesystem
sudo mkfs.ext2 <device> -- create ext2 filesystem
sudo mkfs.xfs <device> -- create XFS filesystem
sudo mkfs.btrfs <device> -- create Btrfs filesystem
sudo mkfs.vfat <device> -- create FAT32 filesystem
sudo mkfs.ntfs <device> -- create NTFS filesystem
mkfs -t <type> <device> -- create by type
mkfs -L <label> <device> -- set volume label
mkfs -n <label> <device> -- set volume label for XFS
sudo mkfs -c <device> -- check for bad blocks
