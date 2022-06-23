# HA Proxy

## Terms

### Backend

Backend where you setup the services which is behind HAProxy.

For example a web server

Usually this connection is un-encrypted or encrypted but without valid certs.
This applies only between the service and HAProxy.


### Frontend

Frontend is where you setup how and where HAProxy will send the traffic.
