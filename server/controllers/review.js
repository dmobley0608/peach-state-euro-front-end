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