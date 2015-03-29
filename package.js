Package.describe({
    name: "jidelgado:edit-google-sheets",
    version: "0.0.5",
    summary: "Meteor wrapper for the edit-google-sheet npm package",
    git: "https://github.com/javieridelgado/edit-google-sheets",
    documentation: "README.md"
});

Npm.depends({
    "googleclientlogin": "0.2.8",
    "google-oauth-jwt": "0.1.4",
    "xml2json": "0.6.1"
});

Package.onUse(function (api) {
    api.versionsFrom("1.0.5");
    api.use("http", "server");
    api.use("underscore", "server");
    api.addFiles("server/edit-google-sheets.js", "server");
    api.addFiles("server/lib/auth.js", "server");
    api.addFiles("server/lib/googlesheet.js", "server");
    api.addFiles("server/lib/metadata.js", "server");
    api.addFiles("server/lib/util.js", "server");
    api.export("GoogleSheet", "server");
});

Package.on_test(function (api) {
    api.use(["jidelgado:edit-google-sheets", "tinytest"], ["client", "server"]);
    api.add_files("package-test.js", ["client", "server"]);
});