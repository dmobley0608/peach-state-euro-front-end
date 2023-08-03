const express = require('express')
const { getAllItems, UpdateItem, AddItem, deleteItem } = require('../controllers/items')
const { authorizationCheck } = require('../controllers/authorization')


const router = express.Router()

router.get("/", getAllItems)

router.post("/add", authorizationCheck, AddItem)

router.put("/update/:id",authorizationCheck, UpdateItem)

router.delete("/delete/:id",authorizationCheck, deleteItem)

module.exports = router