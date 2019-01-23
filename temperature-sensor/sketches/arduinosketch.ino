#include <OneWire.h>
#include <DallasTemperature.h>
#include <SPI.h>


// This sets the pin the data comes into. Currently it is pin 2
#define ONE_WIRE_BUS 2
//This sets up the display to be able to reset


/* This is the setup for multiple OneWire devices. Unknown if needed
 *  but will include for now just in case */
 OneWire oneWire(ONE_WIRE_BUS);

//Somehow calls the Dallas Temperature Sensor. Research more into this.
DallasTemperature sensors(&oneWire);

//global variables Bad form, I know.
//need to figure out if I should add the time_t variable. Need to get into library first.
int delayPeriod;



void setup() {
  /* Starts serial port. Will most likely need to modify once WiFi is added
   *  Check the baud rate(9600). I don't know what it actually does, need to make sure
   that it is correct if we use the ESP8266*/
  Serial.begin(9600);
  // Starts the sensors library
  sensors.begin();

}

void loop() {
  // Call to sensors over the bus. At the moment just one sensor.
  sensors.requestTemperatures(); // temp sensor command
  //add in clock function if possible here.
  
  float temp; 
  delayPeriod = 5000; // temporary set variable before server testing
  Serial.print( "Temp(F): ");
  temp = sensors.getTempFByIndex(0); // setup variable so it'll be easy to show on OLED
  Serial.println(temp); // change to "Serial.print(etc) once have time function
  /*Calls the for the temp sensor in position 1 on the bus. Just 1 at the moment.
  that's what the index for. TempF means degrees F */
    // Serial.print("  Time:"); //Add in time function here
  // Serial.println(Time);
  delay(delayPeriod);
 

}
