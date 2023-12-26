---
title: First tweaks
sidebar_position: 2
---

After installing an Ubuntu VM, this is some things I personally do first.

## Update the system

```shell
sudo apt update
sudo apt upgrade -y
```

## Set static IP

You need to create a file `/etc/netplan/01-netcfg.yaml` with your static IP configuration

```shell
sudo nano /etc/netplan/01-netcfg.yaml
```

Paste the following inside and change to match your network setup

Configuration:

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: no
      dhcp6: no
      addresses:
        - 10.1.1.233/24
      routes:
        - to: default
          via: 10.1.1.1
      nameservers:
        addresses:
          - 10.1.1.1
```

`10.1.1.233` is the IP I want for this server
`10.1.1.1` is the IP of my firewall
`eth0` is your interface, view it with `ip a`

```shell
ip a
```

Example output:

```shell
user@vm:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether da:23:5d:45:9a:f8 brd ff:ff:ff:ff:ff:ff
    inet 10.1.1.234/24 brd 10.1.1.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::d823:5dff:fe45:9af8/64 scope link
       valid_lft forever preferred_lft forever
```

Apply the network configuration...

```shell
sudo netplan generate
sudo netplan apply
```

## Install guest tools (Optional)

- On your Hypervisor, mount the `guest-tools.iso`
- Follow instructions from the hypervisor website.
