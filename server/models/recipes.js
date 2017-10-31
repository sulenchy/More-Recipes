

module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('recipes', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    upvote: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    downvote: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Recipes.associate = (models) => {
    Recipes.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return Recipes;
};
