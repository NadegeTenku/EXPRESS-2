const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Orders extends Model {}

Orders.init({
    customerID: DataTypes.STRING,
    orderDate: DataTypes.DATEONLY
}, {
    sequelize,
    timestamps: false
})

module.exports = {Orders};