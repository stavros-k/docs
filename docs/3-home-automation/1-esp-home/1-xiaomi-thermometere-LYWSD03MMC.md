# Xiaomi Thermometer LYWSD03MMC

## Flash firmware
Using this [project](https://github.com/atc1441/ATC_MiThermometer) you can flash your `Xiaomi Thermometer LYWSD03MMC`
Visit the Flasher [Page](https://atc1441.github.io/TelinkFlasher.html).

![LYWSD03MMC](img/lywsd03mmc.jpeg)

## Use it with ESPHome
You are gonna need an ESP32 as a bluetooth transceiver like the `Wemos LoLin32 ESP32`

![esp32](img/esp32.jpg)

Flash [ESPHome](https://esphome.io/) to `ESP32` following the guide on EPSHome's website.

Basic config for the transceiver

```yaml
esphome:
  name: bluetooth_transceiver
  platform: ESP32
  board: esp-wrover-kit

wifi:
  ssid: "WiFi Name"
  password: "WiFi Password"
  domain: .localdomain

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Bluetooth Transceiver"
    password: "fallbackPassword"

captive_portal:

# Enable logging
logger:

# Enable Home Assistant API
api:

ota:

esp32_ble_tracker:
```

## Configuration (Example)
* You can find thermometer's MAC address while flashing the firmware or let ESPHome discover it after the first flash.
* You can put any bind key you want (Assuming you used <kbd>Mi Like</kbd> as `Advertising Type`.

```yaml
esphome:
  name: bluetooth_transceiver
  platform: ESP32
  board: esp-wrover-kit

wifi:
  ssid: "WiFi Name"
  password: "WiFi Password"
  domain: .localdomain

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Bluetooth Transceiver"
    password: "fallbackPassword"

captive_portal:

# Enable logging
logger:

# Enable Home Assistant API
api:

ota:

esp32_ble_tracker:

sensor:
  - platform: xiaomi_lywsd03mmc
    mac_address: "A4:C1:38:20:FC:30"
    bindkey: "eef418daf699a0c188f3bfd17e4565d9"
    temperature:
      name: "Server Rack Temperature"
    humidity:
      name: "Server Rack Humidity"
    battery_level:
      name: "Server Rack Battery Level"

  - platform: xiaomi_lywsd03mmc
    mac_address: "A4:C1:38:BE:4F:7A"
    bindkey: "eef418daf699a0c188f3bfd17e4565d9"
    temperature:
      name: "Lab Temperature"
    humidity:
      name: "Lab Humidity"
    battery_level:
      name: "Lab Battery Level"

```
Repeat `- platform: xiaomi_lywsd03mmc` code block for every sensor you want to add.

More in-depth info about configuration you can find [here](https://esphome.io/components/sensor/xiaomi_ble.html?highlight=atc#lywsd03mmc)
