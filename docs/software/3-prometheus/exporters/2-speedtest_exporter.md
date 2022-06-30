# Speedtest Exporter

## Installation

Let's see how to install it!

### Docker

Command:

```shell
docker run -d \
  --name=speedtest-exporter \
  -p 9798:9798 \
  --restart unless-stopped \
  miguelndecarvalho/speedtest-exporter
```

Compose:

```yaml
version: "3.0"
services:
  speedtest-exporter:
    image: miguelndecarvalho/speedtest-exporter
    container_name: speedtest-exporter
    ports:
      - 9798:9798
    restart: unless-stopped
```

## Configuration

Speedtest [exporter](https://github.com/MiguelNdeCarvalho/speedtest-exporter) is a Prometheus exporter
written in Python using the official Speedtest CLI made by Ookla.

Add below job under `scrape_configs` on your prometheus configuration.

`prometheus.yaml`

```yaml
  - job_name: 'speedtest-exporter'
    # How often to run the speedtest
    scrape_interval: 1h
    # After how much time it will consider it failed
    scrape_timeout: 1m
    static_configs:
      - targets: ['localhost:9798']
```
