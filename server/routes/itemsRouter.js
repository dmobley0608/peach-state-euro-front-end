const express = require('express')
const { getAllItems } = require('../controllers/items')


const router = express.Router()

router.get("/", getAllItems)


module.exports = router