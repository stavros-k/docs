---
title: Backup/Restore XOA
sidebar_position: 7
---

:::danger Danger

This only backs up the XOA configuration, not the VMs or their data.

:::

:::warning Warning

Backup file contains sensitive information like passwords
as plain text, so keep it safe.

:::

## Backup XOA Configuration

Navigate to `Settings` > `XO Config`

- Click <kbd>Download current config</kbd>
-
  ![xoa-download-backup](img/xoa-backup-restore.png)

- (Optional) Enter a password to encrypt your backup

  ![xoa-encrypt-backup](img/xoa-encrypt-backup.png)

- Click <kbd>OK</kbd>

## Restore XOA Configuration

If you want to restore to a new installation, follow
the [installation guide](./install.md) and then come back here.

- Navigate to `Settings` > `XO Config`
- Drag and drop your backup file in the `Import` area

  ![xoa-download-backup](img/xoa-backup-restore.png)

- Click <kbd>Import</kbd>
- You can see the name of the file you just uploaded

  ![xoa-import-select](img/xoa-import-select.png)

- (Optional) Enter the password you used to encrypt your backup
- Click <kbd>OK</kbd>
- You can see the success message

  ![xoa-import-success](img/xoa-import-success.png)

- You have successfully restored your XOA configuration
