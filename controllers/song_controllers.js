var express = require("express");
var request = require("request");

var router = express.Router();

var db = require("../models");

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
            console.log(days);
            res.send(days);
        }
    })
})

router.get("/articles/comments/:id", function(req, res) {
    Article.findById(req.body.articleId)
        .populate("comments")
        .exec(function(error, article) {
            if (error) {
                console.log(error);
            } else {
                res.send(article);
            }
        });
});

router.get("/articles", function(req, res) {
    Article.find({}, function(error, articles) {
        if (error) {
            console.log(error);
        } else {
            res.send(articles);
        }
    });
});

// SCRAPE AND DISPLAY NEW ARTICLES
router.get("/articles/new", function(req, res) {
    request("http://www.npr.org/sections/news", function(error, response, html) {
        if (error) {
            console.log(error);
        } else {
            var $ = cheerio.load(html);
            var newArticles = [];

            $("article.item.has-image", "#overflow").each(function(i, element) {

                var newArticle = {};

                newArticle.headline = $(this).find("h2.title").find("a").text();
                newArticle.link = $(this).find("h2.title").find("a").attr("href");
                newArticle.image = $(this).find(".item-image").find("a").find("img").attr("src");
                newArticle.date = $(this).find("p.teaser").find("a").text();

                newArticles.push(newArticle);
            });
            res.send(newArticles);
        }
    });
});

// ADD ARTICLE TO DATABASE
router.post("/articles", function(req, res) {
    var entry = new Article(req.body.article);

    entry.save(function(error, article) {
        if (error) {
            console.log(error);
        } else {
            res.send("Article Added");
        }
    });
})

// SAVE AN ARTICLE
router.put("/articles/new/:id", function(req, res) {
    Article.findByIdAndUpdate(req.body.articleId, {
        saved: true,
        dateSaved: Date.now()
    }, function(error, saved) {
        if (error) {
            console.log(error);
        } else {
            res.send("Article Saved");
        }
    });
});

// GET ALL SAVED ARTICLES
router.get("/articles/saved", function(req, res) {
    Article.find({
        saved: true
    }, function(error, articles) {
        if (error) {
            console.log(error);
        } else {
            res.send(articles);
        }
    })
});

// REMOVE A SAVED ARTICLE
router.put("/articles/saved/:id", function(req, res) {
    Article.findByIdAndUpdate(req.body.articleId, {
        saved: false
    }, function(error, saved) {
        if (error) {
            console.log(error);
        } else {
            res.send(saved);
        }
    });
});

// GET ARTICLE COMMENTS
router.get("/articles/comments/:id", function(req, res) {
    Article.findById(req.body.articleId)
        .populate("comments")
        .exec(function(error, article) {
            if (error) {
                console.log(error);
            } else {
                res.send(article);
            }
        });
});

// ADD A COMMENT TO AN ARTICLE
router.post("/articles/comments/:id", function(req, res) {
    var newComment = new Comment(req.body.userComment);
    newComment.save(function(error, comment) {
        if (error) {
            console.log(error);
        } else {
            var articleId = req.body.articleId;
            Article.findByIdAndUpdate(articleId, {
                $push: { "comments": comment }
            }, { new: true }, function(error, comment) {
                if (error) {
                    console.log(error);
                } else {
                    res.send("Comment Added");
                }
            });
        }
    });
});

// DELETE A COMMENT
router.delete("/comments/:id", function(req, res) {
    var articleId = req.body.articleId;
    Comment.findByIdAndRemove(articleId, function(error, deleted) {
        if (error) {
            console.log(error);
        } else {
            res.send("Comment Deleted");
        }
    });
});

module.exports = router;/**
 * Created by brycerichards on 5/6/17.
 */
