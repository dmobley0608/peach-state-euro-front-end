const { Reviews } = require("../model/review")



exports.getAllReviews = async(req, res)=>{
    try{
        const reviews = await Reviews.findAll()
        res.status(200).json(reviews)
    }catch(err){
        res.status(500).json(err.message) 
    }
}

exports.addReview = async(req, res)=>{
    try{
        const review = await Reviews.create({...req.body})
        console.log(review)
        res.status(200).json(review)
    }catch(err){
        res.status(500).json(err.message)
    }
}

exports.deleteReview = async(req, res)=>{   
    if(req.user.role === 'admin'){
        const {id} = req.params
        console.log(id)
        Reviews.destroy({where:{id:id}}) 
        res.status(200).json("Review Deleted Successfully")
    }else{
        res.status(403).json("You do not have permission to perform this action")
    }
}