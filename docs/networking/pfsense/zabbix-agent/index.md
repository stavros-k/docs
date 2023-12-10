---
title: Zabbix Agent
sidebar_position: 13
---

Zabbix agent is deployed on a monitoring target to actively monitor local resources and applications
(hard drives, memory, processor statistics etc). The agent gathers operational information locally
and reports data to Zabbix server for further processing. In case of failures (such as a hard disk running
full or a crashed service process), Zabbix server can actively alert the administrators of the particular
machine that reported the failure. Zabbix is an enterprise-class open source distributed monitoring solution.
A sample configuration file has been installed in /usr/local/etc/
Please add your default network interface in the 'Interface' line there
before starting vnstat service.
