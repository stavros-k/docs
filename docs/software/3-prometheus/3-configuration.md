# Prometheus Configuration

## prometheus.yaml

This file holds configuration of the scrape targets, rules, remote write targets, etc.
You can pick what parts you want based on your setup.

```yaml
global:
  # How frequently to scrape targets
  scrape_interval: 15s
  external_labels:
    host: "server-01"
    location: "office"
# TODO: Check tls_config
scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
    basic_auth:
      username: "user"
      password: "actual-non-hashed-password"
  # Insert here more jobs
# TODO:
rule_files:
  - "path/to/rule/file.yaml
  - "another/path/to/rule/file.yaml
# TODO:
alerting:

# This section is required when you configure prometheus in agent mode
remote_write:
    # Where to send the data
  - url: https://prometheus.yourdomain.com/api/v1/write
    remote_timeout: 30s
    send_exemplars: false
    follow_redirects: true
    basic_auth:
      username: "user"
      password_file: "/path/to/the/password/file.txt"
    # TODO:
    tls_config:
```

`password.txt`

```text
actual-non-bcrypted-password
```

If you scrape many hosts, might be a good idea to add some `external_labels`
so you can tell which is which. Any key: value you want

## web.yml

The `web.yml` file is only needed if you want to add basic auth or other forms of authentication.

```yaml
basic_auth_users:
    user1: bcrypt_hash
    user2: bcrypt_hash
    user3: bcrypt_hash
# TODO: Check tls_server_config:
```

You can have as many users as you want. For example you have multiple
Prometheus Agents sending data to this server and you want to authenticate
each with a unique set of username and password

You can generate a bcrypt hash [here](https://bcrypt-generator.com/).
More rounds equals stronger encryption, but also more CPU usage on decryption.

> I had some trouble with authentication when I was using 32char long passwords.
> Using shorter passwords eg. 16char was no problem.
