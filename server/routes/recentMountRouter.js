const express = require("express")
const {getAllRecentMounts, updateMount} = require("../controllers/recentMount")
const { authorizationCheck } = require("../controllers/authorization")

const router = express.Router()

router.get("/", getAllRecentMounts)
router.put("/update", authorizationCheck, updateMount)
module.exports = router