var db = require("../models");
const Op = db.Sequelize.Op;

function getUsersFollowed(userId) {
  return new Promise( (resolve, reject) => {
    db.Follow.findAll({
      attributes: ["followedId"],
      where: {
        userId: userId
      }
    }).then(result => {
      if(result.length === 0) { //user does not follow anyone
        resolve(null);
      }
      else {
        const usersFollowed = result.map(user => user.dataValues.followedId);
        resolve(usersFollowed);
      }
    });
  });
}

function getTopMovies(usersFollowed) {
  return new Promise( (resolve, reject) => {
    db.Review.findAll({
      attributes: [
        "title",
        "IMDBid",
        ["AVG(score)", "avgScore"],
        "posterURL"
      ],
      where: {
        userId: {
          [Op.or]: usersFollowed
        }
      },
      group: ["IMDBid"],
      order: [
        [db.sequelize.fn("COUNT", db.sequelize.col("IMDBid")), "DESC"],
        [db.sequelize.col("avgScore"), "DESC"]
      ],
      limit: 5
    }).then(result => {
      if(result.length === 0) {
        resolve(null);
      }
      else {
        const movies = result.map(movie => movie.dataValues);
        resolve(movies);
      }
    });  
  });
}

function getRecentReviews(movies, usersFollowed) {
  return new Promise( (resolve, reject) => {
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
        },
        userId: {
          [Op.or]: usersFollowed
        }
      },
      order: [["createdAt", "DESC"]],
      limit: 10
    }).then(result => {
      if(result.length === 0) {
        resolve(null);
      }
      else {
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
        resolve(reviews);
      }
    });  
  });
}

module.exports = {
  getUsersFollowed: getUsersFollowed,
  getTopMovies: getTopMovies,
  getRecentReviews: getRecentReviews
}