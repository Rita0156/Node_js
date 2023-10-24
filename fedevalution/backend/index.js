
const express=require("express")
const {connection}=require("./confing/db.js")
const {SingupModel}=require("./Model/singupModel.js")

const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to homepage....")
})

app.post("/singup",async(req,res)=>{
    const payload=req.body()
    const data=new SingupModel(payload)
     await data.save()
     res.send("Sing up successfull")
})

app.listen(7500,async()=>{
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