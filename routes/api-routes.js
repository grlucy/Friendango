// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

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
      password: req.body.password
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
        id: req.user.id
      });
    }
  });

  // ***************************************************************************************
  // PSEUDO-CODE
  // BACK-END API ROUTES
  // ***************************************************************************************

  // Note: Activity 14-12 has some similar routes that might be helpful to look at

  // POST /api/reviews   save a review to the db
  app.post("/api/reviews", function(req, res) {
    console.log(req.body);
    db.Review.create({
      IMDBid: req.body.IMDBid,
      title: req.body.title,
      posterURL: req.body.posterURL,
      reviewText: req.body.reviewText,
      score: req.body.score,
      userID: req.body.userID
    }).then(function(dbNewReview) {
      res.json(dbNewReview);
    });
  });

  // POST /api/signup   create new user
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbNewUser) {
      res.json(dbNewUser);
    });
  });

  // POST /api/login    log in
  

  // POST /api/follow  create a follower/followee relationship
  app.post("/api/follow", function(req, res) {
    console.log(req.body);
    db.Follow.create({
      followeeID: req.body.followeeID,
      followerID: req.body.followerID
    }).then(function(dbNewFollow) {
      res.json(dbNewFollow);
    });
  });
};
