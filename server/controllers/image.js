const {Images} = require("../model/image")

exports.getAllImages = async(req,res)=>{
    try{
        const images = await Images.findAll();
        res.status(200).json(images)
    }catch(err){
        res.status(500).json(err.message)
    }
}