# Two Factor Authentication

`Proxmox` supports 2FA out of the box.

Navigate under `Datacenter` -> `Permissions` -> `Two Factor`

- Click <kbd>Add</kbd>
- Click <kbd>TOTP</kbd>
  ![2fa-totp](img/proxmox-2fa-totp.png)
- Fill in `Description`
- Copy `Secret` or `Scan` QR code to your 2FA App
- Fill in `Verify Code` from the 2FA App
- Click <kbd>Add</kbd>
  ![2fa-qr](img/proxmox-2fa-qr.png)
- Click <kbd>Add</kbd> again
- Click <kbd>Recovery Keys</kbd>
- Select your user
  ![recovery-keys](img/proxmox-recovery-keys.png)
- Click <kbd>Add</kbd>
- Copy and/or print recovery keys
  ![recovery-copy](img/proxmox-recovery-copy.png)
