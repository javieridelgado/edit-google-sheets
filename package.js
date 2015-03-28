Package.describe({
    name: 'jidelgado:edit-google-sheets',
    version: '0.0.1',
    summary: 'Meteor wrapper for the edit-google-sheet npm package',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Npm.depends({
    "edit-google-spreadsheet": "0.2.16"
});

Package.onUse(function (api) {
    api.versionsFrom('1.0.5');
    api.addFiles('edit-google-sheets.js');
    api.export("GoogleSheet");
});
