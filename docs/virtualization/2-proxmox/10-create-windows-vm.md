# Windows 11 VM

:::info Prerequisites

- Have [`VirtIO`](5-upload-iso.md#download-virtio-iso) and `windows` ISO's [uploaded](./5-upload-iso.md) to `Proxmox`

:::

## Create VM

Right click the node you want to create the VM.

- **General**:
  - Name: Give it a name
  - (Optional) Check `Start at boot`
  - Click <kbd>Next</kbd>
    ![windows-general](img/proxmox-windows-general.png)
- **OS**:
  - Storage: Select the storage you have the `Windows` ISO
  - ISO Image: Select the `Windows` ISO
  - Type: `Windows`
  - Version: `11/2022`
  - Click <kbd>Next</kbd>
    ![windows-os](img/proxmox-windows-os.png)
- **System**:
  - Machine: `q35`
  - BIOS: `OVMF (UEFI)`
  - Check `QEMU Agent`
  - Check `Add TPM`
  - TPM Storage: Select the storage for `TPM`
  - Version: `v2.0`
  - Check `Add EFI`
  - EFI Storage: Select the storage for `EFI`
  - Click <kbd>Next</kbd>
    ![windows-system](img/proxmox-windows-system.png)
- **Disks**:
  - Bus/Device: `SCSI`
  - Storage: Select the storage for your `Windows` disk
  - Check `Discard`, if storage supports `Thin Provisioning`
  - Disk Size (GiB): Set Disk Size, at least 50GB
  - Check `SSD emulation`, if you checked `Discard`
  - Click <kbd>Next</kbd>
    ![windows-disk](img/proxmox-windows-disk.png)
- **CPU**:
  - Cores: Set the core count for the VM to use
  - Type: Select `host`, if you don't plan to migrate to another node with a completely different CPU
  - Click <kbd>Next</kbd>
    ![windows-cpu](img/proxmox-windows-cpu.png)
- **Memory**:
  - Memory (MiB): Set the maximum memory for the VM to use
  - Minimum memory (MiB): Set the minimum memory for the VM to use
  - Check `Ballooning Device`
  - Click <kbd>Next</kbd>
    ![windows-memory](img/proxmox-windows-memory.png)
- **Network**:
  - Bridge: Select the NIC bridge for the VM to use
  - Model: `VirtIO (paravirtualized)`
  - Click <kbd>Next</kbd>
    ![windows-network](img/proxmox-windows-network.png)

## Add `VirtIO` ISO

Navigate under the Node -> Select the VM -> `Hardware`

- Click <kbd>Add</kbd>
  ![windows-add-virtio](img/proxmox-windows-add-virtio.png)
- Click <kbd>CD/DVD Drive</kbd>
- Storage: Select the storage you have the `VirtIO` ISO
- ISO Image: Select the `VirtIO` ISO
- Click <kbd>Add</kbd>
  ![windows-select-virtio](img/proxmox-windows-select-virtio.png)

## Start `Windows` VM

Navigate under the Node -> Select the VM

- Click <kbd>▶️ Start</kbd>
- Click <kbd>>_ Console</kbd>
- When the window open, it will ask you to press any key.
  - Press any key in your keyboard, eg <kbd>Space</kbd>
    ![windows-any-key](img/proxmox-windows-any-key.png)
- Select your Language
  ![windows-lang](img/proxmox-windows-lang.png)
- Click <kbd>Next</kbd>
  ![windows-install-now](img/proxmox-windows-install-now.png)
- Click <kbd>Install now</kbd>
- Enter your product key or click <kbd>I don't have a product key</kbd>
  ![windows-key](img/proxmox-windows-key.png)
- Click <kbd>Next</kbd>
- Select the version you want to install
  ![windows-version](img/proxmox-windows-version.png)
- Click <kbd>Next</kbd>
- Check `I accept...`
  ![windows-license](img/proxmox-windows-license.png)
- Click <kbd>Next</kbd>
- Select `Custom: Install Windows only (advanced)`
  ![windows-custom](img/proxmox-windows-custom.png)
- Click <kbd>Load Driver</kbd>
  ![windows-load-driver](img/proxmox-windows-load-driver.png)
- Click <kbd>Browse</kbd>
- Expand `CD Drive (D:) virtio-win`
- Expand `amd64`
- Select `w11`
  ![windows-virtio](img/proxmox-windows-virtio.png)
- Click <kbd>OK</kbd>
  ![windows-virtio-scsi](img/proxmox-windows-virtio-scsi.png)
- Click <kbd>Next</kbd>
- Click <kbd>Load Driver</kbd>
  ![windows-load-driver](img/proxmox-windows-load-driver.png)
- Click <kbd>Browse</kbd>
- Expand `CD Drive (D:) virtio-win`
- Expand `NetKVM`
- Expand `w11`
- Select `amd64`
- Click <kbd>OK</kbd>
  ![windows-virtio-net](img/proxmox-windows-virtio-net.png)
- Click <kbd>Next</kbd>
- Select the `Drive 0`
  ![windows-drive](img/proxmox-windows-drive.png)
- Click <kbd>Next</kbd>
- Wait for installation for finish
