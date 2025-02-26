import express, { Router } from "express";
import dotenv from "dotenv"
import connectDB from "./db.js";
import Login from "./schema.js";


connectDB()
const router = express.Router()
dotenv.config()
const app = express()
app.use(express.json())
app.use("/",router)
router.post("/login", async(req,res)=>{
    try{
        const {email,password} = await req.body
        if (!email ){
            console.log("Email shouldn't be empty")
        }
        if (!password){
            console.log("Password shouldn't be empty")
        }
        if (email && password){
            res.status(201).json({comment:"Login successful"})
        }
    }
    catch(error){
        console.log("some error occured")
    }
})



app.listen(process.env.PORT,()=>{
    console.log(`Connected to port ${process.env.PORT}`)
})

