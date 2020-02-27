var db = require("../models");
const Op = db.Sequelize.Op;
var passport = require("../config/passport");
const axios = require("axios");
const dex = require("../controllers/index-controller");
const mv = require("../controllers/movie-controller");
const dash = require("../controllers/dashboard-controller");

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
    } else {
      //get list of 5 most-reviewed movies in our db
      dex.getTopMovies()
      .then(result => {
        if(result === null) {  //no reviews in the db
          const data = {
            movies: [],
            reviews: []
          };
          console.log(data);

          //call handlebars render with data
          res.render("index", data);
        }
        else {
          const movies = result;
          movies.sort((a, b) => {
            return b.avgScore - a.avgScore;
          });
          //get the 10 most recent reviews for the movies returned above
          dex.getRecentReviews(movies)
          .then(result => {
            const reviews = result;
            const data = {
              movies: movies,
              reviews: reviews
            };
            console.log(data);
  
            //call handlebars render with data
            res.render("index", data);
          });
        }
      });
    }
  });

  //logged in users at route "/" will redirect here - should serve up index.handlebars, passing logged-in-appropriate data
  app.get("/dashboard", isAuthenticated, function(req, res) {
    dash.getUsersFollowed(req.user.id)
    .then(result => {
      if(result === null) {  //no followed users
        dash.getTopMovies([])
        .then(result => {
          if(result === null) {  //no reviews in db
            const data = {
              movies: [],
              reviews: []
            };
            console.log(data);
  
            //call handlebars render with data
            res.render("user-dashboard", data);
          }
          else {  //movies found
            const movies = result;
            movies.sort((a, b) => {
              return b.avgScore - a.avgScore;
            });
            dash.getRecentReviews(movies, [])
            .then(result => {
              const reviews = result;
              const data = {
                movies: movies,
                reviews: reviews
              };
              console.log(data);
    
              //call handlebars render with data
              res.render("user-dashboard", data);    
            });
          }
        });
      }
      else {  //there are followed users
        const usersFollowed = result;
        dash.getTopMovies(usersFollowed)
        .then(result => {
          if(result === null) {  //no reviews in db from followed users
            dash.getTopMovies([])  //look for reviews from anyone
            .then(result => {
              if(result === null) {  //no reviews in db
                const data = {
                  movies: [],
                  reviews: []
                };
                console.log(data);
      
                //call handlebars render with data
                res.render("user-dashboard", data);
              }
              else {  //movies found
                const movies = result;
                movies.sort((a, b) => {
                  return b.avgScore - a.avgScore;
                });
                dash.getRecentReviews(movies, [])
                .then(result => {
                  const reviews = result;
                  const data = {
                    movies: movies,
                    reviews: reviews
                  };
                  console.log(data);
        
                  //call handlebars render with data
                  res.render("user-dashboard", data);    
                });
              }
            });
          }
          else {  //reviews from followed users found
            const movies = result;
            movies.sort((a, b) => {
              return b.avgScore - a.avgScore;
            });
            dash.getRecentReviews(movies, usersFollowed)
            .then(result => {
              const reviews = result;
              const data = {
                movies: movies,
                reviews: reviews
              };
              console.log(data);
    
              //call handlebars render with data
              res.render("user-dashboard", data);    
            });
          }
        });
      }
    });
  });

  // Need to get html for a specific user's profile
  app.get("/users/:username", isAuthenticated, function(req, res) {
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

            const loginUserID = req.user.id;

            //get list of users that user follows
            db.Follow.findAll({
              attributes: ["followedId"],
              where: {
                userId: req.user.id
              }
            }).then(result => {
              const usersFollowed = result.map(
                user => user.dataValues.followedId
              );

              let alreadyFollowed = false;
              if (usersFollowed.indexOf(userId) > -1) {
                alreadyFollowed = true;
              }

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
                  loginUserId: loginUserID,
                  profileUserId: userId,
                  alreadyFollowed: alreadyFollowed,
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
        });
      }
    });
  });

  // Need to get html for the specific movie that the user searched for
  app.get("/movies/:imdbId", isAuthenticated, function(req, res) {
    const imdbId = req.params.imdbId.trim();
    //get movie data from OMDB
    axios
      .get(`http://www.omdbapi.com/?i=${imdbId}&apikey=${process.env.apikey}`)
      .then(function(response) {
        const movie = {
          imdbId: imdbId,
          title: response.data.Title,
          releaseDate: response.data.Released,
          rating: response.data.Rated,
          plot: response.data.Plot,
          posterURL: response.data.Poster
        };

        mv.getUsersFollowed(req.user.id)
        .then(result => {
          if(result === null) {  //not following anybody
            mv.getAverageScore(movie.imdbId, [])
            .then( result => {
              if(result === null) {  //no reviews for movie
                movie.avgScore = null;
                movie.reviews = [];
                movie.scoreCounts = [];
                console.log(movie);
                res.render("movie", movie);
              }
              else {
                movie.avgScore = result;
                mv.getReviews(movie.imdbId, [])
                .then( result => {
                  movie.reviews = result;
                  mv.getScores(movie.imdbId, [])
                  .then( result => {
                    movie.scoreCounts = result;
                    console.log(movie);
                    res.render("movie", movie);
                  });
                });
              }
            });
          }
          else {  //there are followed users
            const usersFollowed = result;
            mv.getAverageScore(movie.imdbId, usersFollowed)
            .then( result => {
              if(result === null) {  //movie has no reviews from followed users
                //get data for all users 
                mv.getAverageScore(movie.imdbId, [])
                .then( result => {
                  if(result === null) {  //no reviews for movie
                    movie.avgScore = null;
                    movie.reviews = [];
                    movie.scoreCounts = [];
                    console.log(movie);
                    res.render("movie", movie);
                  }
                  else {
                    movie.avgScore = result;
                    mv.getReviews(movie.imdbId, [])
                    .then( result => {
                      movie.reviews = result;
                      mv.getScores(movie.imdbId, [])
                      .then( result => {
                        movie.scoreCounts = result;
                        console.log(movie);
                        res.render("movie", movie);
                      });
                    });
                  }
                });    
              }
              else {  //there are reviews from followed users
                movie.avgScore = result;
                mv.getReviews(movie.imdbId, usersFollowed)
                .then( result => {
                  movie.reviews = result;
                  mv.getScores(movie.imdbId, usersFollowed)
                  .then( result => {
                    movie.scoreCounts = result;
                    console.log(movie);
                    res.render("movie", movie);
                  });
                });
              }
            });
          }
        });
      });
  });

  // Need to get html for the specific review that the user wants to share
  app.get("/reviews/:id", isAuthenticated, function(req, res) {
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
  app.get("/create/:id", isAuthenticated, function(req, res) {
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
