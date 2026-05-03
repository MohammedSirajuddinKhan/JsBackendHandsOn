//require('dotenv').config({path: './env'})
import dotenv from "dotenv";

import connectDB from "./db/db.js";
dotenv.config({
  path: "./env",
});
connectDB();

/*
import express from "express"
const app = express()
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error
        })
        app/AudioListener(process.env.PORT,()=>{
            console.log(`App is listening on port http://localhost:${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERRORL ",error);
        throw error
    }
})();
*/
