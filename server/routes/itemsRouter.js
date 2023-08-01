const express = require('express')
const { getAllItems, UpdateItem, AddItem, deleteItem } = require('../controllers/items')


const router = express.Router()

router.get("/", getAllItems)

router.post("/add", AddItem)

router.put("/update/:id", UpdateItem)

router.delete("/delete/:id", deleteItem)

module.exports = router