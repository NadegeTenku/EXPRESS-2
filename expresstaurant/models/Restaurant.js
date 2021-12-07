const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Restaurant extends Model {}

Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    capacity: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
})

module.exports = {Restaurant};