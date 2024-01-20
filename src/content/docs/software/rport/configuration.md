---
title: Configuration
sidebar_position: 2
---

On the first login, assuming you selected `totp`, you will be asked to initialize it.
You will need to have an authenticator app for that.

I recommend creating a new user with admin privileges and then deleting admin.

Navigate to `⚙️` -> `Users`

- Click <kbd>➕Add User</kbd>
- Username: `yourusername`
- Groups: `Administrators`
- Password: `yourpassword`
- Confirm Password: `yourpassword`

Login with your new user, initialize `totp` again.

Now navigate again to `⚙️` -> `Users`

- Click Recycle bin<kbd>🗑️</kbd> next to `admin`

Navigate to `⚙️` -> `Vault`

- Save the `passphrase`
- Click <kbd>Initialize Vault</kbd>

Now you can navigate to `⚙️` -> `Client access`

- Click <kbd>Install client</kbd>
- Click <kbd>Copy to clipboard</kbd> the correct script for your client's OS
- Run it on your client OS.

You should now see your client in the dashboard.
