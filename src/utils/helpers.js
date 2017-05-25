const axios = require("axios");

const keys = require("../constants/keys");

const spotifySearchUrl = "https://api.spotify.com/v1/search?q=";

const helpers = {

    checkDate: function(date) {
        return axios.get("/date", date)
            .then(function(results) {
                return results;
            });
    },

    getDates: function() {
        return axios.get("/date")
            .then(function(dates) {
                console.log("getDates: ", dates);
                return dates;
            });
    },

    getSongIds: function() {
        return axios.get("/songs/id")
            .then(function(results) {
                return results;
            });
    },

    getSongInfo: function(songId) {
        return axios.get("/song/:id", songId)
            .then(function(song) {
                return song;
            });
    },

    searchSong: function(query) {
        return axios.get(spotifySearchUrl + encodeURIComponent(query) + "&type=album,artist,track")
            .then(function (songs) {
                return songs;
            })
    }
};


module.exports = helpers;
