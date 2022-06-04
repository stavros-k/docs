# Create Windows VM on Proxmox

:::info Prerequisites

- Have [uploaded](./upload-iso) ISO's to proxmox

:::

- Right click the proxmox node you want to create the VM.
	- **General**:
		- Name: (Optional)
	- **OS**:
		- Storage: (Where you stored the ISO Image)
		- ISO Image: (The ISO Image)
		- Type: `Windows`
		- Version: `11/2022` (or earlier, depending on the ISO Image you selected)
	- **System**:
		- Machine: `q35`
		- BIOS: `OVMF (UEFI)`
		- Add TPM: (Uncheck)
		- EFI Storage: (Select where you want to store it)
	- **Disks**:
		- Storage: (Select where you want to store it)
		- Disk Size (GiB): (Set Disk Size)
	- **CPU**:
		- Cores: (Set how many cores you want)
	- **Memory**:
		- Memory (MiB): (Set how much RAM you want)
	- Before starting the VM Navigate to `Options`
		- Double-Click `QEMU Guest Agent` and select `Use QEMU Guest Agent`
