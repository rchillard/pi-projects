// Initialize variables for needed libraries and instantiate objects
var GoogleSpreadsheet = require('google-spreadsheet')
var creds = require('./client_secret.json')
var five = require("johnny-five")
var board = new five.Board()
var date = new Date()

// Create a document object using the ID of the spreadsheet - obtained from its URL
var doc = new GoogleSpreadsheet('1u2FH3Q_ko3IvGdb12fKuFDWrm6d10Za11iFoQ5juJ7o')

// Wait for connection to board and temperature sensor
board.on("ready", function() {
    // This requires OneWire support using the ConfigurableFirmata
    // Instatiate a new Thermometer
    // Frequency to measure temperature is in milliseconds
    var thermometer = new five.Thermometer({
        controller: "DS18B20",
        pin: 2,
        freq: 60000
    })
    console.log("Initialized thermometer as: " + thermometer.controller + ", using pin: " + thermometer.pin + ", measuring frequency: " + thermometer.freq)
    // Authenticate with the Google Spreadsheets API
    doc.useServiceAccountAuth(creds, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Successfully connected to Google drive API!")
            // Load the basic spreadsheet title and author email to verify target
            doc.getInfo(function (err, info) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Loaded document: ' + info.title + ' by ' + info.author.email)
                }
            })
        }
    })

    // Capture changes in temperature
    thermometer.on("change", function() {
        // Store these in variables
        var temp = this.fahrenheit + "°F";
        var currentDate = new Date(Date.now()).toLocaleString();
        // Dump to console for debugging purposes
        console.log("Detected change to: " + temp + " @ " + currentDate);

        // Send data to Google spreadsheet with date and temperature
        doc.addRow(1, { date: currentDate, temp: this.fahrenheit }, function (err) {
            // Log a successful push to Google spreadsheet for debugging purposes
            console.log("Logged " + temp + " @ " + currentDate + " to Google sheet")
            if (err) {
                console.log(err)
            }
        })
    })
})
