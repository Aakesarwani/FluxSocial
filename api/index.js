import Express from "express";
const app=Express();
import userRoutes from "./route/users.js";
import postRoutes from "./route/posts.js";
import commentRoutes from "./route/comments.js";
import likeRoutes from "./route/likes.js";
import relationshipRoutes from "./route/relationships.js";
import authRoutes from "./route/auth.js";
import follow from "./route/follow.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
//import uploadRoute from "./route/routeUpload.js"

//middlewares
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
})
app.use(Express.json())
app.use(
    cors({
        origin:"http://localhost:3000",
    })
);
app.use(cookieParser());

const storage =multer.diskStorage({
    destination: function(req,file , cb){
        cb(null, '../client/public/upload')
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({storage: storage});

app.post("/api/upload",upload.single("file"),(req,res)=>{
    const file=req.file;
    res.status(200).json(file.filename)
});

app.use("/api/users" , userRoutes);
app.use("/api/posts" , postRoutes);
app.use("/api/comments" , commentRoutes);
app.use("/api/likes" , likeRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/relationships" , relationshipRoutes);
app.use("/api/followsuggestions", follow);
//app.use("/api/upload", uploadRoute);

app.listen(8800, ()=>{
    console.log("API working at port 8800");
});