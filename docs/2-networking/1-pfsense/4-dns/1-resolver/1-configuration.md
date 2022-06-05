# Configuration

## General

Navigate to `Services` -> `DNS Resolver` -> `General Settings`

- Check `Enable DNS Resolver`
- Uncheck `Enable DNSSEC Support`
- Check `Enable Forwarding Mode`
- Check `Use SSL/TLS for outgoing DNS Queries to Forwarding Servers`
- Check `Register DHCP static mappings in the DNS Resolver`
- Click <kbd>💾Save</kbd>
- Click <kbd>✔️Apply Changes</kbd>

![resolver-general1](img/resolver-general1.png)
![resolver-general2](img/resolver-general2.png)

## Advanced

Navigate to `Services` -> `DNS Resolver` -> `Advanced Settings`

- Check `Prefetch Support`
- Uncheck `Harden DNSSEC Data`
- Check `Serve Expired`
- `Message Cache Size`: 50MB
- `Number of Hosts to Cache`: 20000
- Click <kbd>💾Save</kbd>
- Click <kbd>✔️Apply Changes</kbd>

![resolver-advanced1](img/resolver-advanced1.png)
![resolver-advanced2](img/resolver-advanced2.png)
