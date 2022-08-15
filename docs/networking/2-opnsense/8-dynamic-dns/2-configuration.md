# Configuration

:::warning Currently working only with Global API Key

Due to an upstream bug, it only works using the Global API Key

For more info follow this [issue](https://github.com/opnsense/plugins/issues/2842) on github

I won't cover how to use it with the Global API Key. Once this is fixed, follow the guide bellow.
:::

Navigate to `Services` -> `Dynamic DNS` -> `Settings`

- Click <kbd>➕</kbd>

![ddns-add](img/ddns-add.png)

- Check `Enabled`
- Service: `Cloudflare`
- Username: `your-zone-id`
- Password: `api-token`
- Zone: `your-domain.com`
- Hostname(s): `your-domain.com`
- Check ip method: `Interface`
- Interface to monitor: `WAN`
- Description: `your-domain.com`

![ddns-config](img/ddns-config.png)

- Click <kbd>Save</kbd>
- Click <kbd>Apply</kbd>

## Zone ID

To get the `Zone ID`, login to your Cloudflare account.
Navigate to `Account Home` (Top right corner, on the human icon)
Select `your-domain.com`.
On the right sidebar, near the bottom. Under `API`, there is the `Zone ID`.
Copy and paste it into `Username` field in OPNSense

## API Token

To get an `API Token`, login to your Cloudflare account.
Navigate to `My Profile` (Top right corner, on the human icon)
On the left sidebar click `API Tokens`
Click <kbd>Create Token</kbd>

From templates select `Edit zone DNS`, click on `Use template`

Under `Permissions` you should add the following:

- `Zone` -> `Zone Settings` -> `Read`
- `Zone` -> `Zone` -> `Read`
- `Zone` -> `DNS` -> `Edit`

Under `Zone Resources` you should add the following:

`Include` -> `Specific zone` -> `your-domain.com`

![cloudflare-api-token](img/cloudflare-api-token.png)

Click <kbd>Continue to summary</kbd>
Click <kbd>Create Token</kbd>

<kbd>Copy</kbd> the token and paste it into `Password` field in OPNSense
