'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dishes extends Model {
    static associate({Restaurant}) {
      this.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
    }
  }
  Dishes.init({ id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  restaurant_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Restaurants',
      key: 'id'
    },
    onDelete: 'cascade'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
  }, {
    sequelize,
    modelName: 'Dishes',
  });
  return Dishes;
};