const db = require("../models");


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render('index');
    });

    app.get("/songs/id", function(req, res) {
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
    app.get("/dates", function(req, res) {
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
}
