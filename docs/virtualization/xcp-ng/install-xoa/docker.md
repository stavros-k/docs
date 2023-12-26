---
title: Docker
sidebar_position: 4
---

- SSH to your docker host
- Create a directory for XOA to store it's data

  ```shell
  mkdir -p /opt/xoa
  ```

- Create the following file `/opt/xoa/docker-compose.yml`

  ```yaml
  services:
    xen-orchestra:
      restart: always
      image: ronivay/xen-orchestra:5.129.0
      stop_grace_period: 1m
      ports:
        - "8443:8443"
      environment:
        HTTPS_PORT: 8443
        REDIRECT_TO_HTTPS: true
      # Capabilities are needed for NFS/SMB mount
      # cap_add:
      #   - SYS_ADMIN
      #   - DAC_READ_SEARCH
      volumes:
        - /opt/xoa/data:/var/lib/xo-server
        - /opt/xoa/redis:/var/lib/redis
      healthcheck:
        test: /healthcheck.sh
        interval: 10s
        timeout: 5s
        retries: 5
        start_period: 30s
  ```

- Run the following command

  ```shell
  docker-compose -f /opt/xoa/docker-compose.yml up -d
  ```

- Visit `https://<ip.of.your.docker.host>:8443`
- Follow the [Quick Start](../setup-xoa.md) guide
