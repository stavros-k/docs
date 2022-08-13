# Import Image

You need to import a Windows Image, so `OSDBuilder` has a base to work with.
Mount an ISO by double clicking it or using the following command.

```powershell
Mount-DiskImage -ImagePath "PATH\TO\ISO"
```

Then import the image with the following command
It will open a GUI to pick the edition you want. eg `Professional`

```powershell
Import-OSMedia
```
