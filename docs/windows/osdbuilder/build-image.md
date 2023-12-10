---
title: Build the new image
sidebar_position: 5
---

```powershell
New-OSBuild -Execute -CreateISO
```

Found your new ISO in `C:\OSDBuilder\OSBuilds\GENERATEDBUILDNAME\ISO`

You can Download new updates before the build by running

```powershell
New-OSBuild -Download -Execute -CreateISO
```

If you have multiple tasks (not template tasks), you can select which task you want to run with:

```bash
New-OSBuild -ByTaskName "Unattend-Cube" -Download -Execute -CreateISO
```
