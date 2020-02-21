module.exports = function(sequelize, DataTypes) {
  const Follow = sequelize.define("Follow", {
    followeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id"
      }
    },
    followerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id"
      }
    }
  });

  Follow.associate = function(models) {
    Follow.belongsTo(
      models.User,
      { foreignKey: "followeeID", as: "user" },
      { foreignKey: "followerID", as: "user" }
    );
  };

  return Follow;
};
