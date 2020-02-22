module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    IMDBid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [55]
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [255]
      }
    },
    posterURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reviewText: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1000]
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [2]
    },
    userID: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "User",
        key: "id"
      }
    }
  });

  Review.associate = function(models) {
    Review.belongsTo(
      models.User,
      { foreignKey: "userID" }
    );
  };

  return Review;
};