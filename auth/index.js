
const {connection}=require("./confing/db.js")
const express=require("express")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to HomePage")
})

app.listen(7000,async()=>{
       try{
          await connection
          console.log("connected to db")
       }
       catch(err){
           console.log("failed to connect")
           console.log(err)
       }
       console.log("running port is 7000")
})