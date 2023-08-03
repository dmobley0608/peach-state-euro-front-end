const { DataTypes } = require("sequelize")
const { sequelize } = require("../utils/sequelize")

exports.Images = sequelize.define("Images", {
    fileId: {
        type: DataTypes.STRING,
        primaryKey: true,        
    },
    url: {
        type: DataTypes.STRING
    },
   thumbnail: {
        type: DataTypes.STRING
    }
   
}, {
    tableName: 'images',
    createdAt: false,
    updatedAt: false, 
})