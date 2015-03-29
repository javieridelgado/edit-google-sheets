GoogleSheet = Npm.require("edit-google-spreadsheet");
GoogleSheet.createSync = Meteor.wrapAsync(GoogleSheet.create);
GoogleSheet.loadSync = Meteor.wrapAsync(GoogleSheet.load);