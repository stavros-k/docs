# Task Bar Layout

I used this file for customizing task bar layout

<details>
    <summary> taskbarlayout.xml </summary>

```xml
<?xml version="1.0" encoding="utf-8"?>
<LayoutModificationTemplate
    xmlns="http://schemas.microsoft.com/Start/2014/LayoutModification"
    xmlns:defaultlayout="http://schemas.microsoft.com/Start/2014/FullDefaultLayout"
    xmlns:start="http://schemas.microsoft.com/Start/2014/StartLayout"
    xmlns:taskbar="http://schemas.microsoft.com/Start/2014/TaskbarLayout"
    Version="1">

  <CustomTaskbarLayoutCollection PinListPlacement="Replace">
    <defaultlayout:TaskbarLayout >
      <taskbar:TaskbarPinList >
        <!-- <taskbar:DesktopApp DesktopApplicationID="windows.immersivecontrolpanel_cw5n1h2txyewy!microsoft.windows.immersivecontrolpanel"/> -->
        <!-- <taskbar:DesktopApp DesktopApplicationID="Microsoft.Windows.ControlPanel"/> -->
        <taskbar:DesktopApp DesktopApplicationID="Microsoft.Windows.Explorer"/>
        <taskbar:DesktopApp DesktopApplicationID="Chrome"/>
        <!-- <taskbar:DesktopApp DesktopApplicationID="Microsoft.VisualStudioCode"/> -->
        <!-- <taskbar:DesktopApp DesktopApplicationID="MSEdge"/> -->
        <!-- <taskbar:DesktopApp DesktopApplicationLinkPath="%APPDATA%\Microsoft\Windows\Start Menu\Programs\System Tools\Command Prompt.lnk"/> -->
      </taskbar:TaskbarPinList>
    </defaultlayout:TaskbarLayout>
  </CustomTaskbarLayoutCollection>
</LayoutModificationTemplate>
```

</details>

Place it in `OSBuilder/Content/StartLayout`
Create Template Task with:

```bash
New-OSBuildTask -TaskName 'TaskBarLayout' -CustomName 'MyCustomTaskName' -ContentStartLayout -SaveAs Template
```
