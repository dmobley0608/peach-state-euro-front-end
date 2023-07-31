const express = require("express")
const {getAllReviews, addReview} = require("../controllers/review")

const router = express.Router()

router.get("/", getAllReviews)  

router.post("/add", addReview)

module.exports = router