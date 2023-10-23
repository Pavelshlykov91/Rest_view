'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
static associate({Comment, Dishes, Like}) {
  this.hasMany(Comment, { foreignKey: 'restaurant_id' });
  this.hasMany(Dishes, { foreignKey: 'restaurant_id' });
  this.hasMany(Like, { foreignKey: 'restaurant_id' });
    }
  }
  Restaurant.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};