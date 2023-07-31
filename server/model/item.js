const { DataTypes } = require("sequelize")
const { sequelize } = require("../utils/sequelize")

exports.Items = sequelize.define("Items", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING
    },
    imageurl: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    }
}, {
    tableName: 'items',
    createdAt: false,
    updatedAt: false, 
})