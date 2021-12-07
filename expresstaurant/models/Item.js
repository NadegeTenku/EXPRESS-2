const {sequelize} = require('../db');
const { DataTypes, Model } = require('sequelize');

class Item extends Model {}

Item.init({
  mealName: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  price: DataTypes.FLOAT
}, {
  sequelize,
  timestamps: false
})

module.exports = {Item};