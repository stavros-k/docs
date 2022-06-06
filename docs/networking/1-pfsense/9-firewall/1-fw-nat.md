# TODO Firewall & NAT

When you want to reach a service hosted in the same network via it's FQDN,
you have to enable NAT reflection (also known as NAT Hairpinning).

Without this, you won't be able to reach it at all,
or you can reach it but all the traffic goes out to the internet and getting back in.

Navigate to  `System` -> `Advanced` -> `Firewall & NAT`

Scroll down to `Network Address Translation`

Set `NAT Reflection mode for port forwards` to `Pure NAT`

Click <kbd>💾Save</kbd>

Other option to do it, is by using Split DNS, which according to pfSense documentation is preferred

TODO: Try Split DNS
