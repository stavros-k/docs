---
title: Windows Assessment and Deployment Kit
sidebar_position: 3
---

:::info[Prerequisite]

- Download ADK (Assessment and Deployment Kit) from [Microsoft](https://docs.microsoft.com/en-us/windows-hardware/get-started/adk-install)
- You have a `.wim` Image extracted. See [here](wds-windows-server.md) how to do that

:::

## Installation

- Open the donwloaded ISO
- Run `adksetup`
- Select all features available

## Starting up

- Open `Windows System Image Manager`
- Navigate to `File` > `New Answer File`
- Click Yes to open a Windows Image now
- Select the Image for the Version of Windows you want to create an answer file

## Passes

### Pass 1

- `UserData`
  - navigate to Left Bottom Panel `Windows Image
    - Expand `Components`
    - Expand `amd64_Microsoft-Windows-Setup_*`
    - Right Click `UserData` and `Add Setting to Pass 1`
  - Navigate to Middle Top Panel `Answer File`
    - Click `UserData`
  - Navigate to Right Top Panel `UserData Properties`
    - Set `AcceptEula` to `true`
- `SetupUILanguage`
  - Navigate to Left Bottom Panel `Windows Image
    - Expand `Components`
    - Expand `amd64_Microsoft-Windows-International-Core-WinPE_neutral`
    - Right Click `SetupUILanguage` and `Add Setting to Pass 1`
  - Navigate to Middle Top Panel `Answer File`
    - Click `SetupUILanguage`
  - Navigate to Right Top Panel `SetupUILanguage Properties`
    - Set `UILanguage` to `en-US`

### Pass 7

- `OOBE` and `UserAccounts`
  - Navigate to Left Bottom Panel `Windows Image
    - Expand `Components`
    - Right Click `amd64_Microsoft-Windows-International-Core_neutral` and `Add Setting to Pass 7`
    - Expand `amd64_Microsoft-Windows-Shell-Setup_*`
    - Right Click `OOBE` and `Add Setting to Pass 7`
    - Right Click `UserAccounts` and `Add Setting to Pass 7`
  - Navigate to Middle Top Panel `Answer File`
    - Expand `OOBE`
    - Delete `VMModeOptimizations`
    - Click `OOBE`
  - Navigate to Right Top Panel `OOOBE Properties`
    - Set `HideEULAPage` to `true`
    - Set `HideOEMRegistrationScreen` to `true`
    - Set `HideOnlineAccountScreens` to `true`
    - Set `HideWirelessSetupInOOBE` to `true`
    - Set `NetworkLocation` to `Work`
    - Set `SkipMachineOOBE` to `true`
    - Set `SkipUserOOBE` to `true`
  - Navigate to Middle Top Panel `Answer File`
    - Expand `UserAccounts`
    - Delete `DomainAccounts`
    - Click `AdministratorPassword`
  - Navigate to Right Top Panel `AdministratorPassword Properties`
    - Set `Value` to `password`
  - Navigate to Middle Top Panel `Answer File`
    - Right Click `LocalAccounts` and select `Insert New Local Account`
    - Click the new `LocalAccount`
  - Navigate to Right Top Panel `LocalAccount Properties`
    - Set `DisplayName` to `User`
    - Set `Group` to `Administrators`
    - Set `Name` to `User`
  - Navigate to Middle Top Panel `Answer File`
    - Click `password` under the new `LocalAccount` we created
  - Navigate to Right Top Panel `Password Properties`
    - Set value to `password
  - Navigate to Left Bottom Panel `Windows Image
    - Expand `Components`
  - Navigate to Middle Top Panel `Answer File`
    - Click `amd64_Microsoft-Windows-International-Core_neutral`
  - Navigate to Right Top Panel `Microsoft-Windows International-Core Properties`
    - Set `InputLocale` to `en-US`
    - Set `SystemLocale` to `en-US`
    - Set `UILanguage` to `en-US`
    - Set `UILanguageFallback` to `en-US`
    - Set `UserLocale` to `en-US`

### Save Answer File

- Navigate to `File` > `Save Answer File As`
- Save it

## Sysprep

- Copy the Answer File to the cleanup Windows 10 VM on `C:\Windows\System32\Sysprep`
- Rename it to `unattend.xml`

- Run `sysprep.exe`
- System Cleanup Action: `Enter System Out-of-Box Experience (OOBE)`
- Select `Generalize`
- Shutdown Options: `Shutdown`

## Capture Image

:::caution

Do NOT boot on Windows at this point.

:::

- Change boot order of Win 10 VM to boot from Network (PXE).
- Boot from PXE and select `Windows 10 Boot`
- When you see the language selection, press <kbd>Shift</kbd> + <kbd>F10</kbd>
- Connect to a network share and capture image with the following commands

  ```bat
  net user Z: \\NASIP\SHARE /user:USERNAME PASSWORD
  Z:\
  cd DIRECTORY
  dism /Capture-Image /ImageFile:Win10-Pro-20H1-Clean.wim /CaptureDir:C:\ /Name:"Windows 10 Pro 20H1 Clean"
  ```

- Now you can navigate to WDS and add the image.
