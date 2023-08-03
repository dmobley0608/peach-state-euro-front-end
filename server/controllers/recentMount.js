const { RecentMounts } = require("../model/recentMount")


exports.getAllRecentMounts = async(req,res)=>{
    try{
        const mounts = await RecentMounts.findAll()
        res.status(200).json(mounts)
    }catch(err){
        res.status(500).json(err.message)
    }
}

exports.updateMount = async(req, res)=>{
    try{
       await RecentMounts.update({...req.body}, {where:{id:req.body.id}})
    }catch(err){
        res.status(500).json(err)
    }
}