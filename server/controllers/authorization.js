

exports.authorizationCheck = (req, res, next)=>{
    if(req.user){
        if(req.user.role === "admin"){
        next()
        }else{
            res.status(403).json("Unaurthorized Access")
        }
    }else{
        res.status(403).json("Unaurthorized Access")
    }
}