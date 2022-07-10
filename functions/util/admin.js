

const admin = require("firebase-admin");

const serviceAccount = require("path/to/serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gg-ez-89a7d.firebaseio.com",
    storageBucket: "gg-ez-89a7d.appspot.com",
});

module.exports = { admin, db };
