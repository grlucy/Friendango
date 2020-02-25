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
  app.get("/movies/:imdbId", function(req, res) {
    const imdbId = req.params.imdbId.trim();

    //get movie data from OMDB
    axios
      .get(`http://www.omdbapi.com/?i=${imdbId}&apikey=trilogy`)
      .then(function(res) {
        const movie = {
          title: res.data.Title,
          year: res.data.Year,
          rating: res.data.Rated,
          plot: res.data.Plot,
          posterURL: res.data.Poster
        };

        //get list of users that user follows
        db.Follow.findAll({
          attributes: ["followedId"],
          where: {
            userId: req.user.id
          }
        }).then(result => {
          const usersFollowed = result.map(user => user.dataValues.followedId);
        
          //get friendango average score for movie from followed users
          db.Review.findAll({
            attributes: [["AVG(score)", "avgScore"]],
            where: {
              IMDBid: imdbId,
              userId: {
                [Op.or]: usersFollowed
              }
            },
            group: ["IMDBid"]
          }).then(result => {
            movie.avgScore = result[0].dataValues.avgScore;

            //find 10 most recent reviews for the movie from followed users
            db.Review.findAll({
              include: [
                {
                  model: db.User
                }
              ],
              attributes: ["id", "reviewText", "score", "title", "IMDBid"],
              where: {
                IMDBid: imdbId,
                userId: {
                  [Op.or]: usersFollowed
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
              movie.reviews = reviews;
              res.render("movie", movie);
            });
          });
        });
      });
  });

  // Need to get html for the specific review that the user wants to share
  app.get("/reviews/:id", function(req, res) {
    // Render review.handlebars
  });

  // Need to get html for the form to create a review
  app.get("/create", function(req, res) {
    // Render create.handlebars
  });
};

//***********STARTER CODE - REDIRECT EXAMPLE */
// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// app.get("/members", isAuthenticated, function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/members.html"));
// });
