---
title: Configuration
sidebar_position: 2
---

## Windows

### Basic

This is a very basic config file. You will still get a ton of metrics with that one.
Plus linking some templates in the Zabbix Web Interface

```bash
# Host Settings
Hostname=MyAgentUniqueName
HostMetadata=MyAgentMetadata

# Server Settings
ServerActive=zabbix.domain.com:10051

# Log Settings
LogType=file
LogFile=C:\monitoring\monitoring\zabbix_agent2.log

# System Settings
ControlSocket=\\.\pipe\agent.sock

# Include configuration files for plugins
Include=.\zabbix_agent2.d\plugins.d\*.conf
```

### TLS Settings

If your agents are remote, you should consider using at least PSK for encryption.

```bash
# TLS Settings
TLSConnect=psk
TLSPSKIdentity=PSK_ID (Can be anything)
TLSPSKFile=path/to/the/psk/file
```

### Custom data

I wanted to get some extra data, which needed to create some extra keys.

```bash
# Custom Data
# Get Public IP
UserParameter=net.public,powershell -nologo -command "(Invoke-WebRequest https://ifconfig.io/ip -UseBasicParsing).Content.Trim()"

# Get TCP Stats (For this, you can import a ready made template)
UserParameter=sockstat.sockets, netstat -ano | find /V "hola" /C
UserParameter=sockstat.tcp.inuse, netstat -ano | findstr "ESTABLISHED"
UserParameter=sockstat.tcp.inuse.count, netstat -ano | find /C "ESTABLISHED"
UserParameter=sockstat.tcp.orphan, netstat -ano | findstr "CLOSE_WAIT"
UserParameter=sockstat.tcp.orphan.count, netstat -ano | find /C "CLOSE_WAIT"
UserParameter=sockstat.tcp.timewait, netstat -ano | findstr "TIME_WAIT"
UserParameter=sockstat.tcp.timewait.count, netstat -ano | find /C "TIME_WAIT"
UserParameter=sockstat.tcp.allocated, netstat -ano | findstr "LISTENING"
UserParameter=sockstat.tcp.allocated.count, netstat -ano | find /C "LISTENING"
UserParameter=sockstat.udp.inuse, netstat -ano | findstr "UDP"
UserParameter=sockstat.udp.inuse.count, netstat -ano | find /C "UDP"
```

> Link for the template [here](https://github.com/zabbix/community-templates/tree/main/Operating_Systems/Windows/template_tcp_udp_windows_connections/6.0)

### Plugins

I usually add the SMART plugin to get disk stats.
Don't forget to link the template.

```bash
#Plugin Settings
Plugins.Smart.Path="C:\Program Files\smartmontools\bin\smartctl.exe"
```
