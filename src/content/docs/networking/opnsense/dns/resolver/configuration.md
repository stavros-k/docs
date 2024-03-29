---
title: Configuration
sidebar_position: 1
---

## Settings

Navigate to `Settings` -> `General`

Remove and DNS server (if any)

- Uncheck `Allow DNS server list to be overridden by DHCP/PPP on WAN`
- Uncheck `Do not use the local DNS service as a nameserver for this system`

![unbound-settings](./img/unbound-settings.png)

## General

Navigate to `Services` -> `Unbound DNS` -> `General`

- Check `Enable Unbound`
- Listen Port: `53`
- Network Interfaces: `All (recommended)`
- Check `DNSSEC`
- Uncheck `DNS64`
- Check `Register DHCP leases`
- Check `Register DHCP static mappings`
- Uncheck `Register IPv6 link-local addresses`
- Local Zone Type: `transparent`
- Click <kbd>Save</kbd>
- Click <kbd>Apply Changes</kbd>

![unbound-general](./img/unbound-general.png)

## Advanced

Navigate to `Services` -> `Unbound DNS` -> `Advanced`

- Check `Prefetch Support`
- Check `Prefetch DNS Key Support`
- Check `Harden DNSSEC data`
- Message Cache Size: `50m`
- RRset cache size: `100m`
- Outgoing TCP Buffers: `10`
- Incoming TCP Buffers: `10`
- Number of queries per thread: `4096`
- Outgoing Range: `8192`
- Jostle Timeout: `200`
- TTL for Host Cache entries: `900`
- Number of hosts to cache: `20000`
- Click <kbd>Save</kbd>

![unbound-advanced](./img/unbound-advanced-1.png)
![unbound-advanced](./img/unbound-advanced-2.png)

## DNS over TLS

Navigate to `Services` -> `Unbound DNS` -> `DNS over TLS`

- Uncheck `Use System Nameservers`
- Click <kbd>➕</kbd>
- Server IP: `1.1.1.1`
- Server Port: `853`
- Verify CN: `cloudflare-dns.com`
- Click <kbd>➕</kbd>
- Server IP: `1.0.0.1`
- Server Port: `853`
- Verify CN: `cloudflare-dns.com`
- Click <kbd>Apply</kbd>

![unbound-dot](./img/unbound-dot.png)
