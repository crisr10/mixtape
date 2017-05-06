// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var helpers = {

  checkDate: function(date) {
    return axios.get("/date", date)
        .then(function(results) {
            return results
        })
  },
  // This will run our query.
  runQuery: function(term, start, end) {

    // Adjust to get search terms in proper format
    var formattedTerm = term.trim();
    var formattedStart = start.trim() + "0101";
    var formattedEnd = end.trim() + "1231";


    console.log("Query Run");
    // Run a query using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey,
        "q": formattedTerm,
        "begin_date": formattedStart,
        "end_date": formattedEnd
      }
    })
    .then(function(results) {
      console.log("Axios Results", results.data.response);
      return results.data.response;
    });
  },
  // This will return any saved articles from our database
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  // This will save new articles to our database
  postSaved: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
  // This will remove saved articles from our database
  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};

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


// We export the helpers function
module.exports = helpers;
