# Preparation

We will prepare a boot-able USB for installing Proxmox.

## Download installer and tools

### Proxmox

- Visit `Proxmox` [download](https://www.proxmox.com/en/downloads) page.
- Click `Proxmox Virtual Environment`
  ![step1](img/proxmox-download-step1.png)
- Click `ISO Images`
  ![step2](img/proxmox-download-step2.png)
- Click <kbd>Download</kbd> under `Proxmox VE 7.3 ISO Installer` (Or whatever the latest is)
  ![step3](img/proxmox-download-step3.png)

### Rufus

Download rufus from their official [site](https://rufus.ie/en/)
Select either the portable version or the installer, both will work.

![download-rufus](img/download-rufus.png)

## Prepare the installation media (USB)

:::danger Destructive move

This process will **DELETE** any data in your USB stick.

:::

- Run `Rufus`
- Select your USB Stick on the `Device` drop down list
- On `Boot selection` Click <kbd>SELECT</kbd> and select the Proxmox ISO we downloaded earlier
- Check again that you selected the correct `Device` on previous step
- Click <kbd>START</kbd>
- Accept the **WARNING** saying that will **DESTROY** your data on this device

![rufus.png](img/rufus.png)

Once the process is finished you are ready to install `Proxmox` to your machine.
