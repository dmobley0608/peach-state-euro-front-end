const express = require("express")
const {getAllRecentMounts} = require("../controllers/recentMount")

const router = express.Router()

router.get("/", getAllRecentMounts)

module.exports = router