const { DataTypes } = require("sequelize")
const { sequelize } = require("../utils/sequelize")

exports.RecentMounts = sequelize.define("Url", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING
    }
   
}, {
    tableName: 'recent_mount',
    createdAt: false,
    updatedAt: false, 
}) 