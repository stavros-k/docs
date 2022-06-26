# Installation - Server

## Docker

We will deploy Prometheus server and configure it as a `remote-write-receiver`.
That means that other prometheus server can send data to store them.

With that, later we will see how to deploy prometheus as an agent, which will send all
data to our primary server.

But for that we will also need to make our primary prometheus server publicly available.
I will be using a **reverse proxy** plus basic auth for now and later spend some time to figure out
better ways to secure the connection.

You can use [HAProxy](networking/../../../networking/1-pfsense/10-haproxy/4-ssl-tls-offloading.md)
as a reverse proxy to expose prometheus

:::info Prerequisite

- Installed [VM](../../virtualization/1-xcp-ng/2-install-ubuntu-vm.md)
- Installed Docker and Docker-Compose

:::

Create the 3 following files. For example in `/home/USER/docker`

```shell
mkdir -p /home/USER/docker/prometheus
touch /home/USER/docker/docker-compose.yml
touch /home/USER/docker/prometheus/etc/prometheus.yml
touch /home/USER/docker/prometheus/etc/web.yml
```

`docker-compose.yml`

```yaml
version: "3"
services:
    prometheus:
        container_name: prometheus
        restart: unless-stopped
        image: prometheus:TAG
        command:
            - "--enable-feature=remote-write-receiver"
            - "--config.file=/etc/prometheus/prometheus.yml"
            - "--web.config.file=/etc/prometheus/web.yml"
            - "--storage.tsdb.retention.time=30d"
            - "--storage.tsdb.path=/prometheus"
        ports:
            - 9090:9090
        volumes:
            - ./prometheus/data:/data
            - ./prometheus/etc:/etc/prometheus
```

`prometheus.yml`

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus-job'
    static_configs:
      - targets: ['localhost:9090']
    basic_auth:
      username: "user"
      password: "actual-non-hashed-password"
```

`web.yml`

```yaml
http_server_config:
    http2: true

basic_auth_users:
    user: bcrypt_hash
```

You can generate a bcrypt hash [here](https://bcrypt-generator.com/).
More rounds equals stronger encryption, but also more CPU usage on decryption.

Once you have the above files created, start prometheus.

```shell
cd /home/USER/docker
docker compose up -d
```
