# Install Windows Server

:::info Prerequisites

- Have [uploaded](./5-upload-iso.md) ISO's to proxmox (including [Windows Server 2022](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2022)
- You have [Created](./6-create-windows-vm.md) the VM

:::

## Installation

- Start/Install Windows Server 2022
  - Click `Console` button on the top right corner on `Proxmox`
  - Press any button to start the installation.
  - Follow the on-screen instructions.
  - Download [Guest Agent](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-virtio/virtio-win.iso)
  - Mount the `Guest Agent` ISO
  - Inside the mounted ISO navigate to `guest-agent`
  - Instal `qemu-ga-x84_64`
  - Navigate to `Device Manager`
  - Right click > `Update Driver` On each device that needs drivers
    - Click `Browse my computer for drivers`
    - Browse to the mounted ISO.
    - Finish installation
