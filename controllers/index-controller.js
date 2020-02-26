var db = require("../models");
const Op = db.Sequelize.Op;

function getTopMovies() {
  return new Promise( (resolve, reject) => {
    db.Review.findAll({
      attributes: [
        "title",
        "IMDBid",
        ["AVG(score)", "avgScore"],
        "posterURL"
      ],
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

function getRecentReviews(movies) {
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
  getTopMovies: getTopMovies,
  getRecentReviews: getRecentReviews
}