---
title: Install Docker
sidebar_position: 5
---

In this example we will install `docker` on `Ubuntu 22.04`.

## Clean previous installations

```shell
sudo apt-get remove docker docker.io containerd runc
```

Example output:

```shell
usre@vm:~$ sudo apt-get remove docker docker.io containerd runc
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Package 'containerd' is not installed, so not removed
Package 'runc' is not installed, so not removed
Package 'docker' is not installed, so not removed
Package 'docker.io' is not installed, so not removed
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
```

## Install required dependecies

```shell
sudo apt -y install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```

Example output:

```shell
user@vm:~$ sudo apt -y install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
ca-certificates is already the newest version (20211016).
ca-certificates set to manually installed.
curl is already the newest version (7.81.0-1ubuntu1.2).
curl set to manually installed.
software-properties-common is already the newest version (0.99.22.2).
software-properties-common set to manually installed.
The following NEW packages will be installed:
  apt-transport-https gnupg-agent
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 6,990 B of archives.
After this operation, 216 kB of additional disk space will be used.
Get:1 http://gr.archive.ubuntu.com/ubuntu jammy/universe amd64 apt-transport-https all 2.4.5 [1,512 B]
Get:2 http://gr.archive.ubuntu.com/ubuntu jammy/universe amd64 gnupg-agent all 2.2.27-3ubuntu2 [5,478 B]
Fetched 6,990 B in 0s (18.5 kB/s)
Selecting previously unselected package apt-transport-https.
(Reading database ... 73321 files and directories currently installed.)
Preparing to unpack .../apt-transport-https_2.4.5_all.deb ...
Unpacking apt-transport-https (2.4.5) ...
Selecting previously unselected package gnupg-agent.
Preparing to unpack .../gnupg-agent_2.2.27-3ubuntu2_all.deb ...
Unpacking gnupg-agent (2.2.27-3ubuntu2) ...
Setting up apt-transport-https (2.4.5) ...
Setting up gnupg-agent (2.2.27-3ubuntu2) ...
Scanning processes...
Scanning linux images...

Running kernel seems to be up-to-date.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.
```

## Install docker

Import GPG key and add docker repository, install it.

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/docker-archive-keyring.gpg
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt -y install docker-ce docker-ce-cli containerd.io
```

Example output:

```shell
user@vm:~$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/docker-archive-keyring.gpg
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
Repository: 'deb [arch=amd64] https://download.docker.com/linux/ubuntu jammy stable'
Description:
Archive for codename: jammy components: stable
More info: https://download.docker.com/linux/ubuntu
Adding repository.
Press [ENTER] to continue or Ctrl-c to cancel.
Adding deb entry to /etc/apt/sources.list.d/archive_uri-https_download_docker_com_linux_ubuntu-jammy.list
Adding disabled deb-src entry to /etc/apt/sources.list.d/archive_uri-https_download_docker_com_linux_ubuntu-jammy.list
Get:1 https://download.docker.com/linux/ubuntu jammy InRelease [48.9 kB]
Get:2 https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages [6,121 B]
Hit:3 http://gr.archive.ubuntu.com/ubuntu jammy InRelease
Hit:4 http://gr.archive.ubuntu.com/ubuntu jammy-updates InRelease
Hit:5 http://gr.archive.ubuntu.com/ubuntu jammy-backports InRelease
Hit:6 http://gr.archive.ubuntu.com/ubuntu jammy-security InRelease
Fetched 55.0 kB in 1s (83.3 kB/s)
Reading package lists... Done
Hit:1 https://download.docker.com/linux/ubuntu jammy InRelease
Hit:2 http://gr.archive.ubuntu.com/ubuntu jammy InRelease
Hit:3 http://gr.archive.ubuntu.com/ubuntu jammy-updates InRelease
Hit:4 http://gr.archive.ubuntu.com/ubuntu jammy-backports InRelease
Hit:5 http://gr.archive.ubuntu.com/ubuntu jammy-security InRelease
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Unpacking docker-ce-rootless-extras (5:20.10.17~3-0~ubuntu-jammy) ...
Selecting previously unselected package docker-scan-plugin.
Preparing to unpack .../5-docker-scan-plugin_0.17.0~ubuntu-jammy_amd64.deb ...
Unpacking docker-scan-plugin (0.17.0~ubuntu-jammy) ...
Selecting previously unselected package libltdl7:amd64.
Preparing to unpack .../6-libltdl7_2.4.6-15build2_amd64.deb ...
Unpacking libltdl7:amd64 (2.4.6-15build2) ...
Selecting previously unselected package libslirp0:amd64.
Preparing to unpack .../7-libslirp0_4.6.1-1build1_amd64.deb ...
Unpacking libslirp0:amd64 (4.6.1-1build1) ...
Selecting previously unselected package slirp4netns.
Preparing to unpack .../8-slirp4netns_1.0.1-2_amd64.deb ...
Unpacking slirp4netns (1.0.1-2) ...
Setting up docker-scan-plugin (0.17.0~ubuntu-jammy) ...
Setting up containerd.io (1.6.6-1) ...
Created symlink /etc/systemd/system/multi-user.target.wants/containerd.service → /lib/systemd/system/containerd.service.
Setting up libltdl7:amd64 (2.4.6-15build2) ...
Setting up docker-ce-cli (5:20.10.17~3-0~ubuntu-jammy) ...
Setting up libslirp0:amd64 (4.6.1-1build1) ...
Setting up pigz (2.6-1) ...
Setting up docker-ce-rootless-extras (5:20.10.17~3-0~ubuntu-jammy) ...
Setting up slirp4netns (1.0.1-2) ...
Setting up docker-ce (5:20.10.17~3-0~ubuntu-jammy) ...
Created symlink /etc/systemd/system/multi-user.target.wants/docker.service → /lib/systemd/system/docker.service.
Created symlink /etc/systemd/system/sockets.target.wants/docker.socket → /lib/systemd/system/docker.socket.
Processing triggers for man-db (2.10.2-1) ...
Processing triggers for libc-bin (2.35-0ubuntu3) ...
Scanning processes...
Scanning linux images...

Running kernel seems to be up-to-date.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.
```

Add your user to docker group

```shell
sudo usermod -aG docker $USER
newgrp docker
```

Verify installation

```shell
docker version
```

Example output:

```shell
user@vm:~$ docker version
Client: Docker Engine - Community
 Version:           20.10.17
 API version:       1.41
 Go version:        go1.17.11
 Git commit:        100c701
 Built:             Mon Jun  6 23:02:46 2022
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.17
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.17.11
  Git commit:       a89b842
  Built:            Mon Jun  6 23:00:51 2022
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.6
  GitCommit:        10c12954828e7c7c9b6e0ea9b0c02b01407d3ae1
 runc:
  Version:          1.1.2
  GitCommit:        v1.1.2-0-ga916309
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

## Enable docker service

```shell
sudo systemctl enable docker
sudo systemctl enable containerd
```

Example output:

```shell
user@dvm:~$ sudo systemctl enable docker
sudo systemctl enable containerd
Synchronizing state of docker.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable docker
```

## Install `docker compose`

```shell
 sudo apt update
 sudo apt -y install docker-compose-plugin
```

Example output:

```shell
user@vm:~$ sudo apt update
sudo apt -y install docker-compose-plugin
Hit:1 https://download.docker.com/linux/ubuntu jammy InRelease
Hit:2 http://gr.archive.ubuntu.com/ubuntu jammy InRelease
Hit:3 http://gr.archive.ubuntu.com/ubuntu jammy-updates InRelease
Hit:4 http://gr.archive.ubuntu.com/ubuntu jammy-backports InRelease
Hit:5 http://gr.archive.ubuntu.com/ubuntu jammy-security InRelease
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
All packages are up to date.
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  docker-compose-plugin
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 6,563 kB of archives.
After this operation, 26.5 MB of additional disk space will be used.
Get:1 https://download.docker.com/linux/ubuntu jammy/stable amd64 docker-compose-plugin amd64 2.6.0~ubuntu-jammy [6,563 kB]
Fetched 6,563 kB in 0s (20.2 MB/s)
Selecting previously unselected package docker-compose-plugin.
(Reading database ... 73592 files and directories currently installed.)
Preparing to unpack .../docker-compose-plugin_2.6.0~ubuntu-jammy_amd64.deb ...
Unpacking docker-compose-plugin (2.6.0~ubuntu-jammy) ...
Setting up docker-compose-plugin (2.6.0~ubuntu-jammy) ...
Scanning processes...
Scanning linux images...

Running kernel seems to be up-to-date.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.
```
