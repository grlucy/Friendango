// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  // ***************************************************************************************
  // PSEUDO-CODE
  // BACK-END HTML ROUTES
  // ***************************************************************************************

  // What's above is all from the starter code and we need to make some changes to it...

  // Need to change the "get" for "/" above to show the homepage dashboard as right now it is directing to signup page;
  // It should render index.handlebars

  // Need to create a new "get" for signup page to replace the one we just changed...
  app.get("/signup", function(req, res) {
    // Render signup.handlebars
  });

  // Need to change the "get" for "/login" above to render login.handlebars instead of login.html

  // Need to remove the "get" for "/members" above and replace it with...
  app.get("/dashboard", isAuthenticated, function(req, res) {
    // Render user-dashboard.handlebars
  });
  // (At this point we can delete the login.html, members.html, and signup.html files as they're no longer being used)

  // Need to get html for the specific movie that the user searched for
  app.get("/movie/:imdbID", function(req, res) {
    // Render movie.handlebars
  });

  // Need to get html for the specific review that the user wants to share
  app.get("/review/:id", function(req, res) {
    // Render review.handlebars
  });

  // Need to get html for a specific user's profile
  app.get("/user/:id", function(req, res) {
    // Render user.handlebars
  });
};
