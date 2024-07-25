# RHEL Server Post-Update Checklist

After applying system updates to a Red Hat Enterprise Linux (RHEL) server, perform the following checks to ensure system stability and functionality:

1. **System Boot and Uptime**
   - [ ] Verify the system has rebooted successfully (if a reboot was performed)
   - [ ] Check system uptime: `uptime`

2. **Kernel Version**
   - [ ] Confirm the new kernel version is active: `uname -r`

3. **System Services**
   - [ ] Check the status of critical services: `systemctl status <service-name>`
   - [ ] Verify no unexpected services are in a failed state: `systemctl list-units --state=failed`

4. **Network Connectivity**
   - [ ] Test network interfaces: `ip add`
   - [ ] Verify DNS resolution: `nslookup safeway01.ad.safeway.com`
   - [ ] Check network connectivity: `ping -c 4 safeway01.ad.safeway.com`

5. **Disk Space and File Systems**
   - [ ] Check available disk space: `df -h`
   - [ ] Verify all expected file systems are mounted: `mount`

6. **System Logs**
   - [ ] Review system logs for errors: `journalctl -p err..emerg -b`
   - [ ] Check for any unusual entries in `/var/log/messages`

7. **Security**
   - [ ] Verify SentinelOne status: `systemctl status sentinelOne.service`

8. **Package Management**
   - [ ] Confirm no packages are in a broken state: `rpm -Va`
   - [ ] Verify no pending updates remain: `yum check-update <exclude>`

9. **Application-Specific Checks** [app owner]
   - [ ] Test critical applications and services specific to your environment
   - [ ] Verify application logs for any new errors or warnings

10. **Performance**
    - [ ] Check CPU usage: `top`
    - [ ] Monitor memory usage: `free -m`
    - [ ] Verify load average: `uptime`

11. **Snapshots**
    - [ ] Ensure snapshots are created correctly

12. **User Access**
    - [ ] Test user login functionality
    - [ ] Verify sudo access for authorized users

13. **Time Synchronization**
    - [ ] Check if time is synced correctly: `timedatectl status`

14. **Hardware Status**
    - [ ] Review hardware status (if applicable): `dmesg | grep -i error`

15. **Cleanup**
    - [ ] Remove old kernels if necessary: `package-cleanup --oldkernels`
    - [ ] Clear any temporary files created during the update process

Remember to document any issues encountered and their resolutions. 
If any critical problems are found, consider rolling back to the previous system state using the snapshot created before the update.
## update stakeholders that patching is done.
## update tracker