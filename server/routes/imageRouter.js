const express = require("express")
const path = require('path');
const {getAllImages, uploadImages, deleteImage} = require("../controllers/image")

const multer = require("multer");
const { authorizationCheck } = require("../controllers/authorization");
const storage = multer.diskStorage({
    destination: path.join(__dirname, '..','uploads'),
    filename: (req, file, cb) => {             
        cb(null, file.originalname)
    }
})
const upload=multer({storage:storage})



const router = express.Router()

router.get("/", getAllImages)
router.post("/", authorizationCheck, upload.array('media'), uploadImages)
router.post("/:fileId", authorizationCheck,  deleteImage)

module.exports = router