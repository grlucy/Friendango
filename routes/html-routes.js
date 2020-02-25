var db = require("../models");
const Op = db.Sequelize.Op;
var passport = require("../config/passport");
const axios = require("axios");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Need to render login.handlebars instead of login.html
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("login", {});
  });

  // Need to create a new "get" for signup page to replace the one we just changed...
  app.get("/signup", function(req, res) {
    // Render signup.handlebars
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("signup", {});
  });

  // Need to show the homepage dashboard as right now it is directing to signup page;
  // It should render index.handlebars
  app.get("/", function(req, res) {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    }
    //get list of 5 most-reviewed movies in our db
    // db.sequelize.query("SELECT title, IMDBid, AVG(score) as avgScore, posterURL FROM reviews GROUP BY IMDBid ORDER BY count(*) DESC, AVG(score) DESC LIMIT 5")
    db.Review.findAll({
      attributes: ["title", "IMDBid", ["AVG(score)", "avgScore"], "posterURL"],
      group: ["IMDBid"],
      order: [
        [db.sequelize.fn("COUNT", db.sequelize.col("IMDBid")), "DESC"],
        [db.sequelize.col("avgScore"), "DESC"]
      ],
      limit: 5
    }).then(result => {
      const movies = result.map(movie => movie.dataValues);
      movies.sort((a, b) => {
        return b.avgScore - a.avgScore;
      });
      //get the 10 most recent reviews for the movies returned above
      db.Review.findAll({
        include: [
          {
            model: db.User
          }
        ],
        attributes: ["id", "reviewText", "score", "title", "IMDBid"],
        where: {
          IMDBid: {
            [Op.or]: movies.map(movie => movie.IMDBid)
          }
        },
        order: [["createdAt", "DESC"]],
        limit: 10
      }).then(result => {
        const reviews = result.map(review => {
          return {
            id: review.dataValues.id,
            reviewText: review.dataValues.reviewText,
            score: review.dataValues.score,
            title: review.dataValues.title,
            IMDBid: review.dataValues.IMDBid,
            username: review.dataValues.User.dataValues.username
          };
        });
        const data = {
          movies: movies,
          reviews: reviews
        };
        console.log(data);

        //call handlebars render with data
        res.render("index", data);
      });
    });
  });

  //logged in users at route "/" will redirect here - should serve up index.handlebars, passing logged-in-appropriate data
  app.get("/dashboard", isAuthenticated, function(req, res) {
    // Render index.handlebars
  });

  // Need to get html for a specific user's profile
  app.get("/users/:username", function(req, res) {
    db.User.findOne({
      attributes: ["id", "username"],
      where: {
        username: req.params.username
      }
    }).then(result => {
      if (result === null) {
        res.status(404).redirect("/");
      } else {
        const userId = result.dataValues.id;
        const username = result.dataValues.username;
        db.Follow.findAndCountAll({
          where: {
            userId: userId
          }
        }).then(result => {
          const followingCount = result.count;

          db.Review.findAndCountAll({
            where: {
              userId: userId
            }
          }).then(result => {
            const reviewCount = result.count;

            db.Review.findAll({
              include: [
                {
                  model: db.User
                }
              ],
              attributes: ["id", "reviewText", "score", "title", "IMDBid"],
              where: {
                userId: userId
              },
              order: [["createdAt", "DESC"]],
              limit: 10
            }).then(result => {
              const reviews = result.map(review => {
                return {
                  id: review.dataValues.id,
                  reviewText: review.dataValues.reviewText,
                  score: review.dataValues.score,
                  title: review.dataValues.title,
                  IMDBid: review.dataValues.IMDBid,
                  username: review.dataValues.User.dataValues.username
                };
              });
              const data = {
                username: username,
                followingCount: followingCount,
                reviewCount: reviewCount,
                reviews: reviews
              };
              console.log(data);

              //call handlebars render with data
              res.render("user", data);
            });
          });
        });
      }
    });
  });

  // Need to get html for the specific movie that the user searched for
  app.get("/movies/:imdbID", function(req, res) {
    // Render movie.handlebars
  });

  app.get("/movies/:title", function(req, res) {
    // Render movie.handlebars
  });

  // Need to get html for the specific review that the user wants to share
  app.get("/reviews/:id", function(req, res) {
    db.Review.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(result => {
      if (result === null) {
        res.status(404).redirect("/");
      } else {
        console.log(result);
        let review = {
          id: result.dataValues.id,
          reviewText: result.dataValues.reviewText,
          score: result.dataValues.score,
          title: result.dataValues.title,
          IMDBid: result.dataValues.IMDBid,
          username: result.dataValues.User.dataValues.username
        };
        // Render review.handlebars
        res.render("review", review);
      }
    });
  });

  // Need to get html for the form to create a review
  app.get("/create/:id", function(req, res) {
    const IMDBid = req.params.id.trim();

    //get movie data from OMDB
    axios
      .get(`http://www.omdbapi.com/?i=${IMDBid}&apikey=${process.env.apikey}`)
      .then(function(response) {
        const movie = {
          IMDBid: IMDBid,
          title: response.data.Title,
          posterURL: response.data.Poster
        };

        // Render create.handlebars
        res.render("create", movie);
      });
  });
};

//***********STARTER CODE - REDIRECT EXAMPLE */
// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// app.get("/members", isAuthenticated, function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/members.html"));
// });
