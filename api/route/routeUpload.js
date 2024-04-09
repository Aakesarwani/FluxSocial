/*import express from "express";
const router=express.Router();
import { cloudinaryConfig } from "../config/cloudinaryConfig.js";
import upload from "../multer.js";
import { uploader} from "cloudinary";

router.post('/upload',upload.single('image'), function (req,res){
    uploader.upload(req.file.path, function(err,result){
        if(err){
            console.log(err);
            return res.status(500).json({
                success:false,
                message:"Error"
            })
        }
        res.status(200).json({
            success:true,
            message:"Uploaded!",
            data:result
        })
    })
});

export default router;*/