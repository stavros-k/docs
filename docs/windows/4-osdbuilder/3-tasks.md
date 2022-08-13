# Tasks

## Create Tasks

You need at least one task created, so you can start an image build.
You can have either Tasks for specific builds or template tasks that run on all future builds.

I like to have all my tasks as templates, unless there is something very specific that I want to change.

Create an "empty" non-template tasks so you can later start an image build.

```powershell
New-OSBuildTask -TaskName 'Build Task' -CustomName 'Win11 Build'
```

## Create Template Tasks

### Remove Appx Packages Task

```powershell
New-OSBuildTask -TaskName 'RemoveAppx' -CustomName 'Win11 Build' -RemoveAppx -SaveAs Template
```

After running the command it will open a GUI to select which `Appx` you want to remove.

### Enable .NET Task

```powershell
New-OSBuildTask -TaskName 'EnableDotNet' -CustomName 'Win11 Build' -EnableNetFX3 -SaveAs Template
```

### Script Task

```powershell
New-OSBuildTask -TaskName 'MyScriptTask' -CustomName 'Win11 Build' -ContentScripts -SaveAs Template
```

It will open a GUI to select what script to run on this task.

> This script will run on the mounted offline image. So any changes you do with the script, make sure
> it will survive the installation process. I usually add scripts that modify registry
