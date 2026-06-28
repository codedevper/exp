---
name: linux-exp
description: Reference for Linux system administration commands on Ubuntu. Documents common commands organized by category.
---

# Linux EXP Skill

This skill provides a reference for Linux system administration on Ubuntu. It documents common commands and configuration tasks organized by category.

## How to Use This Skill

1. **Install the skill** in opencode by adding it to your `opencode.json` or `AGENTS.md`:

   ```json
   "skills": ["file:///path/to/.agents/skills/linux-exp"]
   ```

   Or copy/symlink the `linux-exp` folder under `.agents/skills/` in your project.

2. **Browse command references** under `cmd/` for quick command usage and examples.

3. **Browse tutorial references** under `references/` for step-by-step guides on common tasks.

## Available Commands

### `containers`
- **docker** — Docker container management (run, ps, exec, logs, rm)
- **docker-compose** — Docker Compose multi-container orchestration

### `logs`
- **journalctl** — Query the systemd journal
- **dmesg** — View kernel ring buffer messages
- **tail** — View and follow log files
- **grep** — Search file contents with patterns

### `networking`
- **ip** — Show and manipulate network interfaces, addresses, routes
- **ss** — Socket statistics utility
- **netplan** — Network configuration utility
- **ping** — Test network connectivity
- **curl** — Transfer data from/to servers
- **wget** — Download files from the web

### `packages`
- **apt** — Package management (install, remove, update, upgrade)
- **dpkg** — Low-level package manager
- **snap** — Snap package management

### `processes`
- **ps** — Report snapshot of current processes
- **top** — Interactive process viewer
- **kill** — Terminate processes by PID or name
- **free** — Display memory usage

### `security`
- **ufw** — Uncomplicated Firewall management
- **ssh** — OpenSSH client
- **ssh-keygen** — Generate SSH key pairs
- **ssh-copy-id** — Install public key on remote host
- **apparmor** — Mandatory Access Control framework
- **fail2ban** — Ban IPs with failed authentication attempts

### `services`
- **systemctl** — Control systemd services and units

### `storage`
- **lsblk** — List block devices
- **fdisk** — Partition table manipulator
- **mkfs** — Build a filesystem
- **mount** — Mount filesystems
- **df** — Report filesystem disk space usage
- **du** — Estimate file space usage

### `sudo`
- **sudo** — Execute commands as another user
- **sudoers** — Sudoers file syntax and options
- **visudo** — Edit sudoers file safely

### `users`
- **adduser** — Create a new user
- **usermod** — Modify a user account
- **deluser** — Remove a user account
- **passwd** — Change user password
- **groupadd** — Create a new group
- **groupdel** — Delete a group

### `web`
- **apache2** — Apache web server management
- **nginx** — Nginx web server management
- **a2ensite** — Enable an Apache site

## Tutorial References

- **Configure SSH 2FA** — Set up two-factor authentication for SSH
- **Install and Configure Apache** — Set up an Apache web server
- **Install and Configure Nginx** — Set up an Nginx web server
- **Install and Configure WordPress** — Set up WordPress on Apache
- **Install Docker** — Install and configure Docker Engine
- **IRC Server** — Run your own IRC server with InspIRCd
- **Viewing and Monitoring Log Files** — System log management
