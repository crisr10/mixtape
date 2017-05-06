const express = require("express");
const request = require("request");

const router = express.Router();

const spotifySearchUrl = "https://api.spotify.com/v1/search?q=";

router.get("/song/:query", function(req, res) {

    let queryUrl = spotifySearchUrl + encodeURIComponent(req.body.query) + "&type=album,artist,track";

    console.log("Query URL: ", queryUrl);

    request(queryUrl, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log("response: ", response);
            res.send(response);
        }
    });
});

