const express = require("express");
const request = require("request");

const router = express.Router();

const db = require("../models");


router.get("/songs/id", function(req, res) {
    db.Day.findAll({
        attributes: ["date","trackId"]
    }, function(error   , days) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            console.log(days);
            res.send(days);
        }
    })
});

// route to get all entered dates
router.get("/dates", function(req, res) {
    db.Day.findAll({
        attributes: ["date"]
    }, function(error, dates) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            console.log(dates);
            res.send(dates);
        }
    })
});


module.exports = router;