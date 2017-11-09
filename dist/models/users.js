'use strict';

module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Users.associate = function (models) {
    Users.hasMany(models.recipes, {
      foreignKey: 'userId',
      as: 'recipes'
    });
  };

  return Users;
};