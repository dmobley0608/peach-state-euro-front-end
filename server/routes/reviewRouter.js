const express = require("express")
const {getAllReviews, addReview, deleteReview} = require("../controllers/review")
const { authorizationCheck } = require("../controllers/authorization")

const router = express.Router()

router.get("/", getAllReviews)  

router.post("/add", addReview)

router.delete("/:id", authorizationCheck, deleteReview)

module.exports = router