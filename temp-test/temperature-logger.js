// Initialize variables for needed libraries and instantiate objects
var GoogleSpreadsheet = require('google-spreadsheet')
var creds = require('./client_secret.json')
var five = require("johnny-five");
var board = new five.Board();
var date = new Date();

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1u2FH3Q_ko3IvGdb12fKuFDWrm6d10Za11iFoQ5juJ7o')

// Wait for connection to board and temperature sensor
board.on("ready", function() {
    // This requires OneWire support using the ConfigurableFirmata
    // Instatiate a new Thermometer
    var thermometer = new five.Thermometer({
        controller: "DS18B20",
        pin: 2
    });

    // Authenticate with the Google Spreadsheets API
    doc.useServiceAccountAuth(creds, function (err) {
        if (err) {
        console.log(err)
        }
        // Get all of the rows from the spreadsheet
        doc.getRows(1, function (err, rows) {
        if (err) {
            console.log(err)
        } else {
            console.log(rows)
        }
        })
    })

    // Capture changes in temperature
    thermometer.on("change", function() {
        // Store these in variables
        var temp = this.celsius + "°C";
        var currentDate = new Date(Date.now()).toLocaleString();
        // Dump to console for debugging purposes
        console.log("Logging " + temp + " @ " + currentDate);

        // Send data to Google Spreadsheet with date and temperature
        doc.addRow(1, { date: currentDate, temp: this.celsius }, function (err) {
            if (err) {
                console.log(err)
            }
        })
    });
});
