
const express=require("express")
const {connection}=require("./confing/db.js")

const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to homepage....")
})

app.listen(7500,async(req,res)=>{
 try{
     await connection
     console.log("Connected to db")
 }
 catch(err){
    console.log("failed to connect")
    console.log(err)
    
 }
 console.log("running port 7500")
 
 
})