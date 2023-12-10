---
title: Installation
sidebar_position: 1
---

Navigate to `System` -> `Package Manager` -> `Available Packages`

Search for `acme` and click <kbd>➕Install</kbd>

![acme-install](img/acme-install.png)

Click <kbd>✔️Confirm</kbd>

Wait until you see `Success`

```shell
>>> Installing pfSense-pkg-acme...
Updating pfSense-core repository catalogue...
pfSense-core repository is up to date.
Updating pfSense repository catalogue...
pfSense repository is up to date.
All repositories are up to date.
The following 4 package(s) will be affected (of 0 checked):

New packages to be INSTALLED:
  pfSense-pkg-acme: 0.7.1_1 [pfSense]
  php74-ftp: 7.4.26 [pfSense]
  php74-pecl-ssh2: 1.3.1 [pfSense]
  socat: 1.7.4.2 [pfSense]

Number of packages to be installed: 4

The process will require 2 MiB more space.
394 KiB to be downloaded.
[1/4] Fetching pfSense-pkg-acme-0.7.1_1.pkg: .......... done
[2/4] Fetching php74-pecl-ssh2-1.3.1.pkg: .... done
[3/4] Fetching socat-1.7.4.2.pkg: .......... done
[4/4] Fetching php74-ftp-7.4.26.pkg: ... done
Checking integrity... done (0 conflicting)
[1/4] Installing php74-pecl-ssh2-1.3.1...
[1/4] Extracting php74-pecl-ssh2-1.3.1: ....... done
[2/4] Installing socat-1.7.4.2...
[2/4] Extracting socat-1.7.4.2: ......... done
[3/4] Installing php74-ftp-7.4.26...
[3/4] Extracting php74-ftp-7.4.26: ........ done
[4/4] Installing pfSense-pkg-acme-0.7.1_1...
[4/4] Extracting pfSense-pkg-acme-0.7.1_1: .......... done
Saving updated package information...
done.
Loading package configuration... done.
Configuring package components...
Loading package instructions...
Custom commands...
Executing custom_php_install_command()...done.
Menu items... done.
Writing configuration... done.
=====
Message from php74-pecl-ssh2-1.3.1:

--
This file has been added to automatically load the installed extension:
/usr/local/etc/php/ext-20-ssh2.ini
=====
Message from php74-ftp-7.4.26:

--
This file has been added to automatically load the installed extension:
/usr/local/etc/php/ext-20-ftp.ini
>>> Cleaning up cache... done.
Success
```
