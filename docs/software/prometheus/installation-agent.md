---
title: Installation - Agent
sidebar_position: 2
---

## Windows

We will install Prometheus as an agent. That means it will not store locally long term data, but
only temporary, until they get send to the server defined in the `remote_write` block in the configuration.
Agent will scrape metrics from local exporters and then send the data to the remote server.

- Create [configuration](configuration.md) file for prometheus
- Place the configuration file in `C:\monitoring\prometheus`
- Download `prometheus` from [here](https://prometheus.io/download/)

  Select the latest version and the file name will be like this: `prometheus-XX.YY.ZZ.windows-amd64.zip`
  Unzip it, and copy all files in a folder like `C:\monitoring\prometheus`

- Install Prometheus as a service

  In order to install prometheus as a service, we need to do the following
  Open command line as `Administrator` and navigate to the path where [nssm](index.md) is stored.

  ```bat
  cd C:\monitoring\nssm\win64
  nssm.exe install prometheus C:\monitoring\prometheus\prometheus.exe --enable-feature=agent --config.file=C:\monitoring\prometheus\prometheus.yml
  ```

- Make sure service is started

  - Press <kbd>⊞ Win</kbd> + <kbd>R</kbd>
  - Type `services.msc` and press <kbd>Enter</kbd>
  - Check `prometheus` service is `Running` and `Automatic`
  - You can also run the following from from an open command line as `Administrator`

  ```bat
  sc start prometheus
  ```

## Linux
