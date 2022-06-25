# Installation

## Install Ubuntu

You will need a linux VM (or bare metal), I tested this on `Ubuntu 20.04`.
You can use this [guide](../../virtualization/1-xcp-ng/2-install-ubuntu-vm.md).

:::caution

Install Ubuntu 20.04, not 22.04! Installer won't work.

:::

## Install `Tactical RMM`

:::info Prerequisites

- Device or software capable of TOTP authenticator
- Real Domain

:::

### Port Forwards

If you plan to use this with clients on remote locations,
you will need to do some port forwarding on your firewall.

- 4222/tcp
- 443/tcp

Tactical RMM recommends to let the script generate the SSL Certs via DNS Challenge.
So you are gonna need a real `domain`.
Also you will have to create 3 `subdomains`
(A or CNAME records) and 1 TXT record (Exact value will be given during the installation).

- `api`.yourdomain.com
- `rmm`.yourdomain.com
- `mesh`.yourdomain.com

Of course you can name the `subdomains` however you want.

Create the 3 `subdomains` now.

### SNI (Optional tip)

If you are running more services on port 443, you can use [HAProxy with SNI](../../networking/1-pfsense/10-haproxy/3-sni.md)
to map the traffic to the correct internal service.

### Let's begin the installation

Update system and check that required packages are installed

```shell
sudo apt update
sudo apt install -y wget curl sudo ufw
sudo apt -y upgrade
```

If you are using `root` user... create a new user

```shell
sudo useradd -m -G sudo -s /bin/bash tactical
sudo passwd tactical
```

:::caution Reminder

From now on you will use **this user only**

:::

### Lock down VM's firewall

If your VM is behind a firewall you can skip this step.

```shell
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow https
sudo ufw allow proto tcp from any to any port 4222
```

Allow SSH for VM management, you can skip this and you can manage VM from withing Xen Orchestra's UI

Restrict SSH to specific IP/networks

`X.X.X.X` can be either:

- IP (eg. 10.1.1.150)
- Network (eg. 10.1.1.0/24)

```shell
sudo ufw allow ssh tcp from X.X.X.X to any port 22
```

OR

Allow all SSH

```shell
sudo ufw allow ssh
```

Enable and activate firewall

```shell
ufw enable && ufw reload
```

### Run the installer

```shell
wget https://raw.githubusercontent.com/amidaware/tacticalrmm/master/install.sh
chmod +x install.sh
./install.sh
```

Follow on-screen instructions
> Depending on your hardware, this might take **long** time

Once this is finished, visit `https://rmm.yourdomain.com`
