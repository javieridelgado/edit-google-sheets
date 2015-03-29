var spreadsheet;
var rows;
var options;

if (Meteor.isServer) {

    spreadsheet = GoogleSheet.loadSync({
        spreadsheetName: "TEST",
        worksheetName: "TEST",
        username: "javier_delgado@bnetbuilders.com",
        password: "xxxx"
    });

    options = {};
    options.params = GoogleSheet.convertRangeToParams("A1:B3");

    rows = spreadsheet.receiveSync(options);
    console.log(rows);

}