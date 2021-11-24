import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from"./routes/auth";
import userRoute from"./routes/users";
import postRoute from"./routes/posts";
import categoryRoute from"./routes/category";
import multer from"multer";
import path from"path";


const app = express();

dotenv.config("./.env");
app.use(express.json());
// to make image displayed
app.use("/images", express.static(path.join(__dirname,"/images")))
// app.get('/', (req, res) => { res.send('Hello from Express!')

mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,                                                                                                                                                                                     
    // useCreateIndex: true,
 }).then(console.log("database is connected"))
  .catch ((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"images")
    },filename:(req,file,cb) => {
        cb(null,req.body.name);
    },
});

const upload = multer({storage:storage});
// app.get('/', (req, res) => { res.send('Hello from Express!')
app.post("/api/upload",upload.single("file"),(req,res) =>{
    res.status(200).json("file has been uploaded");
})
app.use("/api/auth",authRoute),
app.use("/api/users",userRoute),
app.use("/api/posts",postRoute),
app.use("/api/category",categoryRoute)

app.use("/",(req,res)=>{
    return res.status(202).json({
        message:"welcome to shecancode blog"
    })
})

const port =process.config.PORT || 4040;
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
    
});   
