const {Sequelize} = require('sequelize')

exports.sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:'postgres'
    
})

exports.sequelizeSync=async()=>{
    const connected =  await this.sequelize.sync({ alter:true, logging:false})
    if(connected){
        console.log("Connected to Database")
    }else{ 
        console.log(connected) 
    }
   
    
} 