# Windows Deployment Services

> Prerequisites:
> [Installed Windows Server 2022.](../proxmox/install-windows-server)

## Install WDS (Windows Deployment Services)
- Change Server Name
	- Navigate to `Control Panel`
	- Navigate to `System and Security`
	- Navigate to `System`
	- Click `Rename this PC`
	- Enter a name. eg `WDS-Server`
	- Reboot
- Open `Server Manager` App
	- Click Manage on top right corner
	- Add Roles and Features
		- Installation Type: `Role-based or feature-based installation`
		- Server Selection: `Select a server from the server pool`
			-	Select your server
	- Server Roles
		- Select `Windows Deployment Services`
		- Click `Add Features`
	-	Role Serivces
  	-	Select `Deployment Server`
		- Select `Transport Server`
	- Click `Install`

## Configure WDS

- Open `Windows Deployment Services` App
	-	Open the `Servers` dropdown
	- Right click your server and select `Configure Server`
	- Select `Standalone server`
	-	Set the Path for the `PXE` boot files.
	- Select `Respond to all client computers` (Or whatever suits your needs).
	- Unselect `Add images to server now`.

## Add Images to WDS

- Windows Server Images
	1. Prepare the images
		- Open your Windows ISO and navigate to `sources`
		- Copy `boot.wim` and `install.wim` to `C:\RemoteInstall`
		- Rename them to `Server2022Boot.wim` and `Server2022Install.wim`
	2. Add Boot Images
		- Navigate to WDS and right click `Boot Images` on the left sidebar
		- Click `Add Boot Image...`
		- Browse and select the `Server2022Boot.wim` image
		- Change name to `Windows Server 2022 Boot`.
		- Done
	3. Add Install Images
		- Navigate to WDS and right click `Install Images` on the left sidebar
		- Click `Add Install Image...`
		- Create an image group: `Server-2022`
		- Browse and select the `Server2022Install.wim` image
		- Unselect `Use the default name and description`
		- Change Image name to something shorter. eg. `Server2022 Standard Core`
		- Same for Image description
		- Repeat for all images
		- Done
 	4. Cleanup
		- Delete `Server2022Boot.wim` and `Server2022Install.wim` from `C:\RemoteInstall`

- Windows 10 Images
	1. Prepare the images
		- Open your Windows ISO and navigate to `sources`
		- Copy `boot.wim` and `install.esd` to `C:\RemoteInstall`
		- Rename them to `Win10Boot.wim` and `Win10Install.esd`
		- Open Powershell (Administrator) and execute the following

    ```powershell
    cd C:\RemoteInstall
    dism /Get-WimInfo /WimFile:Win10Install.esd
    # Note the index numbers of the images you want to extract.
    # Run the following command for each of the indexes you want to extract, remember to change
    # the name of the DestinationImageFile for each index.
    dism /Export-Image /SourceImageFile:Win10Install.esd /SourceIndex:6 /DestinationImageFile:C:\RemoteInstall\Win10ProInstall.wim /Compress:max /CheckIntegrity
    ```

	2. Add Boot Images
		- Navigate to WDS and right click `Boot Images` on the left sidebar
		- Click `Add Boot Image...`
		- Browse and select the `Win10Boot.wim` image
		- Change name to `Windows 10 Boot`.
		- Done
	3. Add Install Images
		- Navigate to WDS and right click `Install Images` on the left sidebar
		- Click `Add Install Image...`
		- Create an image group: `Windows10`
		- Browse and select the `Win10ProInstall.wim` image
		- Unselect `Use the default name and description`
		- Change Image name to eg. `Windows 10 Pro - VERSION`
		- Same for Image description
		- Repeat these steps for all images
		- Done
 	4. Cleanup
		- Delete `Win10Boot.wim`, `Win10Install.esd` and `Win10ProInstall.wim` from `C:\RemoteInstall`
- You can now boot a PC with PXE from the network.

## Attach `Answer File` to an Image

After you added an image, you can attach an answer file you [created](./assessment-deployment-kit).

- Right Click the Install Image and click `Properties`
- Select `Allow iamge to isntall in unattended mode`
- Click `Select File...`
- Click `Browse`
- Select the Answer File you saved earlier

:::tip

Don't mix different versions of windows into the same group.
eg. Keep all `Server2022` together, don't mix `Server2022` and `Server2019`.
Same for `Windows 10`, don't mix with `Windows 11` or `Windows 7`.

:::

:::tip

Is suggested to install all the Windows Updates available at the time, then shutdown the VM and take a snapshot.

:::
