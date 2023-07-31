const { DataTypes } = require("sequelize")
const { sequelize } = require("../utils/sequelize")

exports.User = sequelize.define("User", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,       
    },   
    username: {
        type: DataTypes.STRING,       
        allowNull:false
    },
    role: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
   
}, {
    tableName: 'user',
    createdAt: false,
    updatedAt: false,  
});  

