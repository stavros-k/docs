# Installation

## Download installer and tools

### OPNsense

Download the installer from OPNsense official download [page](https://opnsense.org/download/)

- Select `amd64` for system architecture
- Select `vga` for bare metal installation or `iso` for virtualized installation
- Select the mirror closest to you
- Click <kbd>Download</kbd>

![download-opnsense](img/download-opnsense.png)

:::info

You can skip `Rufus` and `Prepare the installation media (USB)`
if you plan to do a virtualized installation

:::

### Rufus

Download rufus from their official [site](https://rufus.ie/en/)
Select either the portable version or the installer, both will work.

![download-rufus](img/download-rufus.png)

## Prepare the installation media (USB)

:::danger

This process will **DELETE** any data in your USB stick.

:::

- Run `Rufus`
- Select your USB Stick on the `Device` drop down list
- On `Boot selection` Click <kbd>SELECT</kbd> and select the OPNsense installer we downloaded earlier
- Check again that you selected the correct `Device` on previous step
- Click <kbd>START</kbd>
- Accept the **WARNING** saying that will **DESTROY** your data on this device

![rufus](img/rufus.png)

Once the process is finished you are ready to install OPNsense to your machine.

## Prepare the installation media (Virtualized)

- Mount the ISO file into your VM
- Set it as primary boot device

## Installation on bare metal

- Boot your machine from the prepared USB stick.
