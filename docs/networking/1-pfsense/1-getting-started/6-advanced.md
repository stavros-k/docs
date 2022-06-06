# Advanced

We are going to change the default ports of WebUI and SSH.

## WebUI

Navigate to `System` -> `Advanced` -> `Admin Access`

Scroll to `webConfigurator`
- TCP port: `8443` (Or any random port you want)
- Uncheck `WebGUI redirect`

![general-advanced-webui](img/general-advanced-webui.png)

## SSH

Navigate to `System` -> `Advanced` -> `Admin Access`

Scroll to `Secure Shell`

- Check `Enable Secure Shell` (If you don't use SSH, keep it disabled)
- SSHd Key Only: `Public Key Only` (I like to only allow key auth)
- SSH port `822` (Or any random port you want)

![general-advanced-ssh](img/general-advanced-ssh.png)
