const { User } = require("../model/user")



exports.getUserByEmail = async(req, res)=>{
    try{
        const user = User.findOne({where:{email: req.body.email}})
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err.message)
    }
}