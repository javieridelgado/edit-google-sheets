Package.describe({
    name: 'jidelgado:edit-google-sheets',
    version: '0.0.2',
    summary: 'Meteor wrapper for the edit-google-sheet npm package',
    git: 'https://github.com/javieridelgado/edit-google-sheets',
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
