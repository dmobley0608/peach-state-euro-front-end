

const express = require('express')
const { sendEmail } = require('../controllers/email')



const router = express.Router()



router.post("/send", sendEmail)




module.exports = router