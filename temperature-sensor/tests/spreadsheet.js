var GoogleSpreadsheet = require('google-spreadsheet')
var creds = require('./client_secret.json')

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1u2FH3Q_ko3IvGdb12fKuFDWrm6d10Za11iFoQ5juJ7o')

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {
  if (err) {
    console.log(err)
  }
  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
    if (err) {
      console.log(err)
    } else {
      console.log(rows)
    }
  })
})
