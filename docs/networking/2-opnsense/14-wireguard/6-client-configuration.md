# Client Configuration

## Generate Public and Private Keys and import them to clients

You can generate keys for a client from any OS that has `Wireguard` installed.
Pick one an OS below and follow the instructions.

### Linux

```shell
wg genkey | tee >(awk '{print "Private Key:", $0}') |\
            wg pubkey | awk '{print "Public Key:", $0}'
```

It should print something like this:

```shell
Private Key: KCqn8yEUsiJKWrXk8cfjW9liYGprmBs79gZ9hhHLIVA=
Public Key: HGmMJdr9iZAatwAQkwLAIW6r710RNwrVNV/PszL5CiI=
```

Config file should look like this:

```ini
[Interface]
# (Client Private Key that you generated earlier)
PrivateKey = KCqn8yEUsiJKWrXk8cfjW9liYGprmBs79gZ9hhHLIVA=
Address = 10.200.0.2/32
# This might not work on all systems.
DNS = 10.0.0.1

[Peer]
PublicKey = (Server Public Key that you copied earlier)
Endpoint = (Server Public IP or DNS):(51820 or the port you chose)
# -- AllowedIPs = (Network(s) that you want to route through the VPN in CIDR notation)
# - Full Tunnel (All traffic through VPN)
# AllowedIPs = 0.0.0.0/0
# - Split Tunnel (Only traffic specific networks through VPN)
AllowedIPs = 10.0.0.0/16, 192.168.12.0/24, 192.168.11.0/24
```

Save the above in a file, for example `/etc/wireguard/wg0.conf`.

To start the VPN connection, run:

```shell
sudo wg-quick up wg0
```

You should now be connected to the VPN.

:::tip

To stop the VPN connection, run:

```shell
sudo wg-quick down wg0
```

:::

### Windows
