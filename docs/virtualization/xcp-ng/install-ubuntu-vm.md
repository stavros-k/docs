---
title: Install Ubuntu VM
sidebar_position: 2
---

- Follow steps from [Download Ubuntu ISO](../../operating-systems/ubuntu/installation.md#download-the-iso)
- SSH to your `xcp-ng` host

  ```shell
  mkdir -p /isos && cd /isos
  curl https://releases.ubuntu.com/22.04/ubuntu-22.04-live-server-amd64.iso --output ubuntu-22.04-live-server-amd64.iso
  ```

  ![xoa-source-mkdir-download-img](img/xoa-source-mkdir-download-img.png)

## Create storage

Navigate to `➕New` > `💿Storage`

- Host: Select your host
- Name: `ISOs`
- Description: `Local storage for ISOs`
- Storage type: `ISO SR Local`
- Path: `/isos
- Click <kbd>▶️Create</kbd>

  ![xoa-source-storage](img/xoa-source-storage.png)

## Create VM

Navigate to `➕New` > `🖥️VMs`

- Click <kbd>New VM</kbd>
- On the top select a pool
- **Info**
  - Template: `Ubuntu Focal Fossa 20.04`
  - Name: `XOA` (Give a name for your VM)
  - Description: `XOA from Source` (Give a Description for your VM)
- **Performance**
  - vCPUs: `2`
  - RAM: `2`
- **Install settings**
  - ISO/DVD: Select `ubuntu-22.04-live-server-amd64.iso`
- **Disks**
  - Name: `xoa` (Give a name for your disk)
  - Size: `20GiB`
- **Advanced**
- Click <kbd>Show Advanced Settings</kbd>
- Check `Auto power on`
- Click <kbd>▶️Create</kbd>

  ![xoa-source-vm1](img/xoa-source-vm1.png)
  ![xoa-source-vm2](img/xoa-source-vm2.png)

## Install OS to VM

Navigate to `🏠Home` > `🖥️VMs`

- Click `XOA` VM (with descriptions `XOA from Source`)
- Navigate to `Console`
- Follow the on-screen instructions to install `Ubuntu`
