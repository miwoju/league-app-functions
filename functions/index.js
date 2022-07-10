const functions = require("firebase-functions");
const app = require("express")();
    
//summoners routes
const { getSummonerInfo } = require("./handlers/summoners");

//summoners.js routes
app.get("/summoner", getSummonerInfo);
// app.post("/signup", signup);
// app.post("/login", login);


exports.api = functions.https.onRequest(app);