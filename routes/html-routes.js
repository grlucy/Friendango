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
    //get movie data from omdb
    let queryURL = `http://www.omdbapi.com/?t=${movie}&apikey=692116c8`;
    axios.get(queryUrl).then(function(res) {

    });

    //get review data from our db
    //call handlebars render with data
  });

  //logged in users at route "/" will redirect here - should serve up index.handlebars, passing logged-in-appropriate data
  app.get("/dashboard", isAuthenticated, function(req, res) {
    // Render index.handlebars
  });

  // Need to get html for a specific user's profile
  app.get("/users/:username", function(req, res) {
    // Render user.handlebars
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
