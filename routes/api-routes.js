// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const axios = require("axios");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        username: req.user.username,
        id: req.user.id
      });
    }
  });

  app.get("/api/movies/:title", isAuthenticated, function(req, res) {
    //search OMDB for movie by title, get its imdbId, and call the "/movies/:imdbId" route
    const title = req.params.title.trim();
    axios
      .get(`http://www.omdbapi.com/?t=${title}&apikey=${process.env.apikey}`)
      .then(function(response) {
        const imdbId = response.data.imdbID;
        res.redirect(`/movies/${imdbId}`);
      });
  });

  // ***************************************************************************************
  // PSEUDO-CODE
  // BACK-END API ROUTES
  // ***************************************************************************************

  // Note: Activity 14-12 has some similar routes that might be helpful to look at

  // "Get" route for getting all review scores for movies with release date in the past 3 months

  // "Get" route for getting 10 most recent reviews and the username associated with them

  // "Get" route for getting logged-in user's username (for the welcome message)

  // "Get" route for getting all review scores for movies with release date in the past 3 months WRITTEN BY USERS THAT THIS USER FOLLOWS

  // "Get" route for getting 10 most recent reviews WRITTEN BY USERS THAT THIS USER FOLLOWS and the username associated with them

  // "Get" route for getting all reviews for a specific movie (using the imdbID) and the username associated with them

  // "Get" route for getting a specific review (using the review id) and the username associated with it

  // "Get" route for getting all reviews for a specific user and the username associated with them (by joining)

  // "Post" route for creating a review

  // "Post" route for creating a follow relationship between follower and followee
};
