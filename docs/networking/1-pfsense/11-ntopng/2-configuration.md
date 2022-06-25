# Configuration

## Get GeoLite2 DB Key

:::note

This step is optional

:::

- Navigate to [MaxMind's website](https://www.maxmind.com/en/account/login)
- Register/Login
- Navigate to `Manage License Keys`
- Click <kbd>Generate new license key</kbd>

![maxmind-generate](img/maxmind-generate.png)

- Enter a Name
- Select `Yes` on `Will this key be used for GeoIP Update`
- Select `Generate a license key and config file for use with geoipupdate version 3.1.1 or newer.`

![maxmind-confirm](img/maxmind-confirm.png)

- Click <kbd>Confirm</kbd>
- Copy and store `License key` for later use

## Enable ntopng

Navigate to `Diagnostics` -> `ntopng Settings`

- Check `Enable ntopng`
- Set `ntong Admin Password`
- Set `Confirm ntong Admin Password`
- Select `Interface`(s) you want to monitor
- Optionally, enter `GeoLite2 DB License Key`
- Click <kbd>💾Save</kbd>

![ntopng-config](img/ntopng-config.png)

## Configure ntopng

Navigate to `Diagnostics` -> `ntopng`

Username: `admin`
Password: `the-password-you-set-before`

- Navigate to top right corner, click on the human icon
- Toggle Dark Theme
- Click `Settings` -> `Preferences` on the left sidebar
  - Click `Expert View`
  - Click `Timeseries`
    - Set `Layer-7 Applications` to `Applications`
    - Set `Host Timeseries` to `Full`
    - Set `Layer-7 Applications` to `Applications`
    - Toggle `VLANs` to `ON`
    - Toggle `Autonomous Systems` to `ON`
    - Toggle `Countries` to `ON`
    - Toggle `Operating Systems` to `ON`
    - Click <kbd>Save</kbd>

![ntopng-timeseries1](img/ntopng-timeseries1.png)
![ntopng-timeseries2](img/ntopng-timeseries2.png)

- Click `Alerts`
  - Toggle `Emit Alerts` to `OFF`
  - Click <kbd>Save</kbd>

![ntopng-alerts](img/ntopng-alerts.png)

- Click `Telemetry`
  - Click `Do not contribute`
  - Click <kbd>Save</kbd>

![ntopng-telemetry](img/ntopng-telemetry.png)

- Click `Data Retention`
  - Set to `120` Days
  - Click <kbd>Save</kbd>

![ntopng-retention](img/ntopng-retention.png)

For every non-WAN interface, navigate to `Interface` on the left sidebar
(You can change interface on the top left corner)

- Click the <kbd>⚙️Gear</kbd>
- Set `Local Broadcast Domain Hosts Identifier` to `MAC Address`
- Click <kbd>Save Settings</kbd>

![ntopng-interface-macaddress](img/ntopng-interface-macaddress.png)

- Click the <kbd>⚡Lightning</kbd>
- Click the <kbd>➕</kbd>
- Enter the first DCHP IP of the interface you are configuring now
- Enter the last DCHP IP of the interface you are configuring now
- Click <kbd>Save Settings</kbd>

![ntopng-dhcp](img/ntopng-dhcp.png)
