# Installation

Zabbix server can be installed in multiple platforms
You will need a database (I 'll go with postgres)

## Docker

```yaml
networks:
  zabbix_net:
  ingress_net:
    name: ingress_net
    external: true
services:
  zabbix_pgsql:
    user: root
    # https://hub.docker.com/r/bitnami/postgresql/tags
    image: 'bitnami/postgresql:14.4.0'
    restart: unless-stopped
    networks:
      - zabbix_net
    environment:
      POSTGRESQL_DATABASE: zabbix
      POSTGRESQL_USERNAME: zabbix
      POSTGRESQL_PASSWORD: database_password
    volumes:
      - /datadisk/zabbix/postgres:/bitnami/postgresql
  zabbix_server:
    # https://hub.docker.com/r/zabbix/zabbix-server-pgsql/tags
    image: 'zabbix/zabbix-server-pgsql:ubuntu-6.2.0'
    restart: unless-stopped
    networks:
      - zabbix_net
    ports:
      - 10051:10051
    environment:
      DB_SERVER_HOST: zabbix_pgsql
      DB_SERVER_PORT: 5432
      POSTGRES_DB: zabbix
      POSTGRES_USER: zabbix
      POSTGRES_PASSWORD: database_password
```
