const { Items } = require("../model/item")


exports.getAllItems = async(req, res)=>{
    try{
        const items = await Items.findAll();
        res.status(200).json(items)
    }catch(err){
        res.status(500).json(err.message)
    }
}