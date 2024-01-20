---
title: Installation
sidebar_position: 2
---

:::note

Prerequisite to have a boot-able USB with Proxmox ready.

:::

Boot the USB drive you [prepared](prepare.md) and once you reach the Proxmox Installer follow the steps

- License Agreement
  - Click `I agree`
    ![step1](./img/proxmox-install-step1.png)
- Password and Email
  - `Password`: Enter a password
  - `Confirm`: Enter a password
  - `Email`: Enter your mail
    ![step2](./img/proxmox-install-step2.png)
- Installation Disk
  - Select the disk you will install Proxmox
    ![step3](./img/proxmox-install-step3.png)
- Network
  - Select the management interface
  - Enter a hostname, for example `pve.localdomain`
  - Enter IP address for Proxmox, for example `10.1.1.254`
  - Enter Gateway
  - Enter DNS Server
    ![step4](./img/proxmox-install-step4.png)
- Finish
  - Click `Reboot`
    ![step5](./img/proxmox-install-step5.png)
- Boot complete
  - Copy the address
    ![step6](./img/proxmox-install-step6.png)
- Visit WebUI
  - Open `https://10.1.1.254:8006`
    ![step7](./img/proxmox-install-step7.png)
- Login
  - Username: `root`
  - Password: The password you entered during setup

You have successfully installed `Proxmox`.
