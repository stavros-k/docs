# Installation - Agent

## Windows

- Download `prometheus` from [here](https://prometheus.io/download/)

  Select the latest version and the file name will be like this: `prometheus-XX.YY.ZZ.windows-amd64.zip`
  Unzip it, and copy all files in a folder like `C:\monitoring\prometheus`

- Download `NSSM` from [here](https://nssm.cc/download)

  Select the latest version and the file name will be like this: `nssm XX.YY`
  Unzip it, and copy all files in a folder like `C:\monitoring\nssm`

- Download `windows_exporter` from [here](https://github.com/prometheus-community/windows_exporter/releases)

  Select the latest version and the file name will be like this: `windows_exporter-XX.YY.ZZ-amd64.msi`
  Copy the file in a folder like `C:\monitoring\windows_exporter`

- Create configuration file for prometheus

  Create a file called `prometheus.yml` in `C:\monitoring\prometheus`

  ```yaml
  global:
    scrape_interval: 15s
    evaluation_interval: 15s
    external_labels:
      key: value

  scrape_configs:
    - job_name: "prometheus"
      static_configs:
        - targets: ["localhost:9090"]
    - job_name: "windows_exporter"
      static_configs:
        - targets: ["localhost:9182"]

  remote_write:
    - url: https://prometheus.yourdomain.com/api/v1/write
      remote_timeout: 30s
      send_exemplars: false
      follow_redirects: true
      basic_auth:
        username: "user"
        password_file: C:\monitoring\prometheus\password.txt
  ```

  Create a file called `password.txt` in `C:\monitoring\prometheus`

  ```text
  actual-non-hashed-password
  ```

  Under `external_labels` you can have as many key-value pairs you want.
  Those labels will be included on every metric. This is good when you want to identify
  the source of each metric. For example if you have multiple machines sending data.

- Create configuration file for windows_exporter

  Create a file called `wmi.ymn` in `C:\monitoring\windows_exporter`

  ```yaml
  # https://github.com/prometheus-community/windows_exporter#collectors
  collectors:
    enabled: cpu,cs,logical_disk,logon,memory,net,os,process,service,system,tcp,thermalzone
  ```

- Install Prometheus as a service

  In order to install prometheus as a service, we need to do the following
  Open command line as `Administrator`

  ```bat
  cd C:\monitoring\nssm\win64
  nssm.exe install Prometheus C:\monitoring\prometheus\prometheus.exe --enable-feature=agent --config.file=C:\monitoring\prometheus\prometheus.yml
  ```

- Install Windows Exporter as a service

  Open command line as `Administrator`

  ```bat
  msiexec /i C:\monitoring\windows_exporter\windows_exporter-XX.YY.ZZ-amd64.msi EXTRA_FLAGS="--config.file=C:\monitoring\windows_exporter\wmi.yml"
  ```

- Make sure services are started

  - Press <kbd>⊞ Win</kbd> + <kbd>R</kbd>
  - Type `services.msc` and press <kbd>Enter</kbd>
  - Check `Prometheus` and `windows_exporter` services are `Running` and `Automatic`
  - You can also run the following from from an open command line as `Administrator`

  ```bat
  sc start Prometheus
  sc start windows_exporter
  ```

  That's it for Windows.
