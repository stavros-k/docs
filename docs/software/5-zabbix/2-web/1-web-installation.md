# Installation

There are two options for web interface, Apache and Nginx.
I'll go with the nginx variant

## Docker

If you are using docker for your server too, just add this on your docker-compose.yml file.

```yaml
  zabbix_web:
    # https://hub.docker.com/r/zabbix/zabbix-web-nginx-pgsql/tags
    image: 'zabbix/zabbix-web-nginx-pgsql:ubuntu-6.2.0'
    restart: unless-stopped
    networks:
      - zabbix_net
      - ingress_net
    environment:
      ZBX_SERVER_NAME: My Zabbix Instance
      ZBX_SERVER_HOST: zabbix_server
      ZBX_SERVER_PORT: 10051
      DB_SERVER_HOST: zabbix_pgsql
      DB_SERVER_PORT: 5432
      POSTGRES_DB: zabbix
      POSTGRES_USER: zabbix
      POSTGRES_PASSWORD: database_password
```
