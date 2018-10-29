# Temperature Sensor Test
The purpose of this small experiment is to see if we can get a Node implementation working with our Arduino Mini Pro.  This guide is written for Linux host machines.  Please consult the johnny-five docs for further guidance on OSX or Windows.

## Equipment
* Arduino Pro Mini 5v (ATmega328 Micro-controller, 16MHz)
* FT232 (FTDI) - USB to RS232 Adapter, 6 pins (1 DTR Reset Pin)
* DS18b20 Temperature Probe (Arduino Compatible Adapter)
* Host Machine (Laptop or Raspberry Pi)

## Resources
* Library for Node on Arduino (johnny-five): https://github.com/rwaldron/johnny-five
* Firmata builder: http://firmatabuilder.com/
* Google sheet/API interaction: https://www.twilio.com/blog/2017/03/google-spreadsheets-and-javascriptnode-js.html

## Setup
Step-by-step guide to getting this project up and running from scratch, assuming little knowledge of microcontrollers.

### Getting Started
1. Connect your Ardino, FT232, and temperature probe together
Need to add picture here
1. Plug this daisy-chain of devices into your host machine
1. Download the Arduino IDE or install it Linux: '<sudo apt install arduino>'
1. From within the IDE, select File > Examples > Firmata > StandardFirmataPlus
1. Compile the Sketch that is presented to you (save if necessary)
1. Upload to the Arduino (you will the LEDs on the device flicker rapidly)
1. Follow the johnny-five getting started guide: https://github.com/rwaldron/johnny-five/wiki/Getting-Started
1. Run the strobe.js or hello-world.js programs to verify a successful connection between host machine and Arduino
  
### Connecting Temperature Sensor
1. Open a new, blank Sketch
1. Copy the ConfigurableFirmata.ino from here:
1. Compile and upload the Sketch to the Arduino (you may receive a low memory warning)
1. Copy this file locally: https://github.com/rchillard/pi-projects/blob/master/temp-test/temperature-ds18b20.js
1. Run '<node temperature-ds18b20.js>'
1. You should see console output with the temperature in celsius

### Posting Data to Google Sheets
1. Create a new empty Google sheet that you can test with in Drive
1. Follow this tutorial for establishing an account and reading test data: https://www.twilio.com/blog/2017/03/google-spreadsheets-and-javascriptnode-js.html
1. Copy this file locally: https://github.com/rchillard/pi-projects/blob/master/temp-test/temperature-logger.js
1. Remember to update the spreadsheet reference per the previous tutorial instructions
1. Run '<node temperature-logger.js>'
