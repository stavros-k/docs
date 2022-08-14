# Wallpapers

You can replace the default windows wallpapers

Place them in `OSDBuilder/ExtraFiles/CUSTOMWALLPAPERFOLDER`

You need the following file structure there

```text
Windows/Web/Wallpaper/Windows/img0.jpg
Windows/Web/4k/Wallpaper/Windows/img0_768x1024.jpg
Windows/Web/4k/Wallpaper/Windows/img0_768x1366.jpg
Windows/Web/4k/Wallpaper/Windows/img0_1024x768.jpg
Windows/Web/4k/Wallpaper/Windows/img0_1200x1920.jpg
Windows/Web/4k/Wallpaper/Windows/img0_1366x768.jpg
Windows/Web/4k/Wallpaper/Windows/img0_1600x2560.jpg
Windows/Web/4k/Wallpaper/Windows/img0_1920x1080.jpg
Windows/Web/4k/Wallpaper/Windows/img0_1920x1200.jpg
Windows/Web/4k/Wallpaper/Windows/img0_2160x3840.jpg
Windows/Web/4k/Wallpaper/Windows/img0_2560x1600.jpg
Windows/Web/4k/Wallpaper/Windows/img0_3840x2160.jpg
```

Create task with:

```bash
New-OSBuildTask -TaskName 'AddWallpapers' -CustomName 'MyCustomName' -ContentExtraFiles
```
