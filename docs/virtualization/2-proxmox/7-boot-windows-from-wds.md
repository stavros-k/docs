# Boot Windows from WDS

:::info Prerequisites

- You have [Created](./5-create-windows-vm.md) the VM

:::

:::tip

You don't have to have an ISO Image.
Just make sure you selected `Do not use any media` when creating the VM

:::

## Start the boot process

- Start the VM
- Click console
- Wait few seconds for `PXE` to start
- Select `WDS Boot Manager` option.
- Choose the Boot Image you want.
- Click `Next`
- Enter Credentials
  - Username: `WDS-Server\Administrator`
  - Password: `YOURPASSWORD`
- Select the Image you want to install
- Follow on-screen instructions
