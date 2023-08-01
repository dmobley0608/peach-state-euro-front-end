const { Items } = require("../model/item")


exports.getAllItems = async(req, res)=>{
    try{
        const items = await Items.findAll({order:['name']});
        res.status(200).json(items)
    }catch(err){
        res.status(500).json(err.message)
    }
}

exports.UpdateItem = async(req, res)=>{
    try{
        const {id} = req.params
        const item = await Items.update({...req.body},{where:{id:id}})
        res.status(200).json(item)
    }catch(err){
        res.status(500).json(err.message)
    }
}

exports.AddItem = async(req, res)=>{
    const {name, description, imageurl, price} = req.body
    try{        
        const item = await Items.create({name:name, description:description, imageurl:imageurl, price:price})
        res.status(200).json(item)
    }catch(err){
        console.log(err)
        res.status(500).json(err.message)
    }
}

exports.deleteItem = async(req, res)=>{
    const {id} = req.params
    try{        
        Items.destroy({where:{id:id}})
        res.status(200).json("Item Deleted Successfully")
    }catch(err){
        console.log(err)
        res.status(500).json(err.message)
    }
}