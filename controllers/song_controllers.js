const express = require("express");
const request = require("request");

const router = express.Router();

const db = require("../models");

router.get("/", function(req, res) {
    return res.redirect("/search");
});

// route to check if date already exists
router.get("/dates/:date", function(req, res) {
    db.Day.find({
        where: {
            date: req.body.date
        }, function (error, day) {
            if (error) {
                throw error;
            } else {
                console.log(day);
                res.send(day);
            }
        }
    })
});

// route to get all entered dates
router.get("/dates", function(req, res) {
    db.Day.findAll({
        attributes: "date"
    }, function(error, days) {
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