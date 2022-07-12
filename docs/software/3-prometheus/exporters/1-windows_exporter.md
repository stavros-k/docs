# Windows Exporter

## Installation

This will be only available for install in Windows machines.

- Download `windows_exporter` from [here](https://github.com/prometheus-community/windows_exporter/releases)

  Select the latest version and the file name will be like this: `windows_exporter-XX.YY.ZZ-amd64.msi`
  Copy the file in a folder like `C:\monitoring\windows_exporter`

- Create a file for windows_exporter (See below)

- Install Windows Exporter as a service

  Open command line as `Administrator`

  ```bat
  msiexec /i C:\monitoring\windows_exporter\windows_exporter-XX.YY.ZZ-amd64.msi EXTRA_FLAGS="--config.file=C:\monitoring\windows_exporter\wmi.yaml"
  ```

- Make sure service is started

  - Press <kbd>⊞ Win</kbd> + <kbd>R</kbd>
  - Type `services.msc` and press <kbd>Enter</kbd>
  - Check `windows_exporter` service is `Running` and `Automatic`
  - You can also run the following from from an open command line as `Administrator`

  ```bat
  sc start windows_exporter
  ```

## Configuration

A Prometheus [exporter](https://github.com/prometheus-community/windows_exporter) for Windows machines.

You can see a list of available collectors [here](https://github.com/prometheus-community/windows_exporter#collectors)


`wmi.yaml`

```yaml
# Comma separated list of the enabled collectors
collectors:
  enabled: cpu,cs,logical_disk,logon,memory,net,os,process,service,system,tcp,thermalzone
# You can only collect specific services like this:
collector:
  service:
    services-where: "Name='windows_exporter' OR Name='prometheus"
```

Add below job under `scrape_configs` on your prometheus configuration.

`prometheus.yaml`

```yaml
  - job_name: "windows_exporter"
    static_configs:
      - targets: ["localhost:9182"]
```
