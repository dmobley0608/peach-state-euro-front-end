const { DataTypes } = require("sequelize")
const { sequelize } = require("../utils/sequelize")

exports.Images = sequelize.define("Images", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    public_id: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    }
   
}, {
    tableName: 'images',
    createdAt: false,
    updatedAt: false, 
})