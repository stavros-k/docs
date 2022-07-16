# Agent

I usually configure all my agents in `Active` mode.
This way it will work either it is behind NAT or not

I usually edit the following in my agents:

- Hostname: `Set Something UNIQUE here`
- HostMetadata: `Set identifiers here, so you can make auto registration rules`
- ServerActive: `YOUR.ZABBIX.SERVER.IP:10050`

I also use TLS-PSK

- TLSConnect: `psk`
- TLSPSKIdentity: `YOUR PSK ID`
- TLSPSKFile: `Path to your PSK key file`

> Note: For Docker and FreeBSD templates, I had to clone the default, and convert every agent type
> from `Zabbix agent` to `Zabbix agent (active)`.
> Make sure to atleast check `Items`, `Discovery`, `Item Prototypes`.

## Docker

If you are using docker for your server too, just add this on your docker-compose.yml file.

```yaml
  zabbix_agent2:
    # https://hub.docker.com/r/zabbix/zabbix-agent2/tags7
    image: 'zabbix/zabbix-agent2:ubuntu-6.2.0'
    restart: unless-stopped
    networks:
      - zabbix_net
    environment:
      ZBX_HOSTNAME: "Zabbix server"
      ZBX_SERVER_HOST: "zabbix_server"
      ZBX_PASSIVESERVERS: "zabbix_server"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
    privileged: true
```

## Windows

Download the agent 2 zip file from [here](https://www.zabbix.com/download_agents).

- Extract the zip in `C:\zabbix`
- Open `C:\zabbix\conf\zabbix_agent2.conf`
- Edit config to your needs

Open `Command Prompt`

```bat
C:\zabbix\bin\zabbix_agent2.exe --config C:\zabbix\conf\zabbix_agent2.conf --install
C:\zabbix\bin\zabbix_agent2.exe --config C:\zabbix\conf\zabbix_agent2.conf --start
```

Now, if you have enabled Auto Regsitration on your Zabbix Server, you should see it on your Hosts

### SmartMonTools

You can monitor S.M.A.R.T. data of your disks also.

- Download smartmontools from [here](https://sourceforge.net/projects/smartmontools/files/smartmontools/).
- Install `smartmontools-x.x.x.win32-setup.exe`.
- Open `C:\zabbix\conf\zabbix_agent2.conf`
- Add somewhere in the file `Plugins.Smart.Path="C:\Program Files\smartmontools\bin\smartctl.exe"`

Open `Command Prompt`

Restart Zabbix Agent.

```bat
C:\zabbix\bin\zabbix_agent2.exe --config C:\zabbix\conf\zabbix_agent2.conf --stop
C:\zabbix\bin\zabbix_agent2.exe --config C:\zabbix\conf\zabbix_agent2.conf --start
```

Now you should be able to add the template for SMART data to this host, and soon you will see data flowing.

## Linux

Tested on:

- Ubuntu 20.04
- Ubuntu 22.04
- Debian 11

Follow the steps bellow and remember to execute the commands for your distro.

- Download the `deb` file
- Install it
- Edit the config to your needs
- Enable Service
- Start Service

```shell
# Ubuntu 20.04
wget https://repo.zabbix.com/zabbix/6.2/ubuntu/pool/main/z/zabbix/zabbix-agent2_6.2.0-1+ubuntu20.04_amd64.deb
sudo dpkg -i zabbix-agent2_6.2.0-1+ubuntu20.04_amd64.deb

# Ubuntu 22.04
wget https://repo.zabbix.com/zabbix/6.2/ubuntu/pool/main/z/zabbix/zabbix-agent2_6.2.0-1+ubuntu22.04_amd64.deb
sudo dpkg -i zabbix-agent2_6.2.0-1+ubuntu22.04_amd64.deb

# Debian 11
wget https://repo.zabbix.com/zabbix/6.2/debian/pool/main/z/zabbix/zabbix-agent2_6.2.0-1+debian11_amd64.deb
sudo dpkg -i zabbix-agent2_6.2.0-1+debian11_amd64.deb

# If you have docker installed on the system and want zabbix to have access on it.
sudo usermod -aG docker zabbix

sudo nano /etc/zabbix/zabbix_agent2.conf
# Edit config file
sudo systemctl enable zabbix-agent2
sudo systemctl start zabbix-agent2
```
