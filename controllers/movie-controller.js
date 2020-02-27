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

function getAverageScore(imdbId, usersFollowed) {
  return new Promise( (resolve, reject) => {
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
      if(result.length === 0) {  //movie has no reviews
        resolve(null);
      }
      else {
        resolve(result[0].dataValues.avgScore);
      }
    });
  });
}

function getReviews(imdbId, usersFollowed) {
  return new Promise( (resolve, reject) => {
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
      if(result.length === 0) {  //movie has no reviews
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

function getScores(imdbId, usersFollowed) {
  return new Promise( (resolve, reject) => {
    db.Review.findAll({
      attributes: ["score", [db.sequelize.fn("COUNT", "score"), "count"]],
      where: {
        IMDBid: imdbId,
        userId: {
          [Op.or]: usersFollowed
        }
      },
      group: "score",
      order: [["score", "DESC"]]
    }).then(result => {
      if(result.length === 0) {  //movie has no reviews
        resolve(null);
      }
      const scoreCounts = result.map( score => {
        return {
          score: score.dataValues.score,
          count: score.dataValues.count
        }
      });
      resolve(scoreCounts);
    });
  });
}


module.exports = {
  getUsersFollowed: getUsersFollowed,
  getAverageScore: getAverageScore,
  getReviews: getReviews,
  getScores: getScores
}