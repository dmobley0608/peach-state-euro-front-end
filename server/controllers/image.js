const { Images } = require("../model/image")
var fs = require('fs-extra');
const path = require("path")
const ImageKit = require("imagekit");
const { thumbnail } = require("@cloudinary/url-gen/actions/resize");

const ik = new ImageKit({
    publicKey: process.env.IMAGE_KIT_PK,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGE_KIT_URL
})

exports.getAllImages = async (req, res) => {
    try {
        const images = await Images.findAll()     
        res.status(200).json(images)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

exports.uploadImages = async (req, res) => {
    const pathUrl = path.join(__dirname, '../uploads')
    try {
        //List files in folder
        fs.readdir(pathUrl, (err, files)=>{
            for(let file of files){    
                //Read File in folder           
                fs.readFile(`${pathUrl}/${file}`, async function(err, data) {
                    if (err) throw err; // Fail if the file can't be read.
                    //Upload to Image Kit
                    ik.upload({
                      file : data, 
                      fileName : file, 
                     folder: 'peach-state-euro'
                    }, async function(error, result) {
                      if(error) console.log(error);
                      else{                       
                        //Add image to database
                        await Images.create({thumbnail: result.thumbnailUrl, ...result})
                      }
                    });
                  });
            }
        })
       //Remove Files in Uploads Folder
        fs.readdir(pathUrl, (err, files)=>{
            if(err) return res.send(err)
            for(const file of files){
                fs.rm(`${pathUrl}/${file}`, ()=>{console.log(`Removing ${file}`)})
            }
        })
        res.status(200).json("Media uploaded successfully")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err.message)
    }   

    
}

exports.deleteImage = async(req, res)=>{
    try{
        //delete image from image kit
        ik.deleteFile(req.params.fileId, async function(error, result) {
            if(error) console.log(error);
            else {
                //delete image from database
                await Images.destroy({where:{fileId:req.params.fileId}})
            };
        });
        res.status(200).json("Successfully Deleted Image")
    }catch(err){
        res.status(500).json("Error Deleting Image")
    }
    
    
}