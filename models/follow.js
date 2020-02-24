module.exports = function(sequelize, DataTypes) {
  const Follow = sequelize.define("Follow", {
  });

  Follow.associate = function(models) {
    Follow.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        fieldName: "userId"
      }
    });
    Follow.belongsTo(models.User, {
      foreignKey: {
        name: "followee_id",
        allowNull: false,
        fieldName: "followedId"
      }
    });
  };

  return Follow;
};
