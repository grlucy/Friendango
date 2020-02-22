module.exports = function(sequelize, DataTypes) {
  const Follow = sequelize.define("Follow", {
  });

  Follow.associate = function(models) {
    Follow.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Follow.belongsTo(models.User, {
      as:'followee',
      foreignKey: {
        name: "followee_id",
        allowNull: false
      }
    });
  };

  return Follow;
};
