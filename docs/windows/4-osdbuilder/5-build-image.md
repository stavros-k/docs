# Build the new image

```powershell
New-OSBuild -Execute -CreateISO
```

Found your new ISO in `C:\OSDBuilder\OSBuilds\GENERATEDBUILDNAME\ISO`

You can Download new updates before the build by running

```powershell
New-OSBuild -Download -Execute -CreateISO
```
