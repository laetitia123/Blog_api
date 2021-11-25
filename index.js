import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from"./routes/auth";
import userRoute from"./routes/users";
import postRoute from"./routes/posts";
import categoryRoute from"./routes/category";
import multer from"multer";
import path from"path";
import cors from "cors";
const { cloudinary } = require('./utils/cloudinary');
// const express = require('express');
const app = express();
// var cors = require('cors');

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());


// const app = express();
app.use(cors());
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

// coudinary code


app.get('/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:dev_setups')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});
app.post('/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});
// coudinary code end here



  
app.use("/api/auth",authRoute),
app.use("/api/users",userRoute),
app.use("/api/posts",postRoute),
app.use("/api/category",categoryRoute)

app.use("/",(req,res)=>{
    return res.status(202).json({
        message:"welcome to shecancode blog"
    })
})

const port =process.env.PORT || 4048;
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
    
});   