# Friendango

A social network for movie reviews


## Routes

GET /login   login page
GET /signup  signup page
GET /logout  logout functionality - not a page
GET /        main page with routing for logged in/not logged in
GET /writeReview/:movieId   return page to create new review for movie with IMDBid=movieId (assuming we get here by clicking an Add Review button on the movie page)
GET /users/:username    show user page for user with matching username
GET /movies/:id   show movie page for movie with matching IMDBid
GET /movies/:title  movies by title
GET /reviews/:id   show single review with matching id

POST /api/reviews   save a review to the db
POST /api/signup   create new user
POST /api/login    log in
POST /api/follow  create a follower/followee relationship
