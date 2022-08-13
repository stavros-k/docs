# Update Imported Image

```powershell
Update-OSMedia -Name 'Windows 11 Pro N x64 21H2 22000.318' -Download -Execute
```

Replace Name with your actual Imported Media (`C:\OSDBuilder\OSImport`)

Optionally download also optional updates

```powershell
Save-OSDBuilderDownload -UpdateOS 'Windows 11' -UpdateBuild 21H2 -UpdateArch x64 -UpdateGroup Optional -Download
```
