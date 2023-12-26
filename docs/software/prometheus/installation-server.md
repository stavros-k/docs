---
title: Installation - Server
sidebar_position: 1
---

## Docker

We will deploy Prometheus server and configure it as a `remote-write-receiver`.
That means that other prometheus server can send data to store them.

With that, later we will see how to deploy prometheus as an agent, which will send all
data to our primary server.

But for that we will also need to make our primary prometheus server publicly available.
I will be using a **reverse proxy** plus basic auth for now and later spend some time to figure out
better ways to secure the connection.

You can use [HAProxy](../../networking/pfsense/haproxy/ssl-tls-offloading.md)
as a reverse proxy to expose prometheus

:::info Prerequisite

- Installed [VM](../../operating-systems/ubuntu/installation.md)
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
      # Enable feature
      - "--web.enable-remote-write-receiver"
      # Where the config is stored inside the container
      - "--config.file=/etc/prometheus/prometheus.yml"
      # Where wht web config is stored inside the container
      - "--web.config.file=/etc/prometheus/web.yml"
      # How long to keep metrics
      - "--storage.tsdb.retention.time=30d"
      # Where to store metrics
      - "--storage.tsdb.path=/prometheus"
    ports:
      - 9090:9090
    volumes:
      - ./prometheus/data:/data
      - ./prometheus/etc:/etc/prometheus
```

[`prometheus.yml`](configuration.md)

[`web.yml`](configuration.md)

Once you have the above files created, start prometheus.

```shell
cd /home/USER/docker
docker compose up -d
```
