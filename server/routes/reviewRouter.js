const express = require("express")
const {getAllReviews, addReview, deleteReview} = require("../controllers/review")

const router = express.Router()

router.get("/", getAllReviews)  

router.post("/add", addReview)

router.delete("/:id", deleteReview)

module.exports = router