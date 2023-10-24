
const express=require("express")
const {connection}=require("./confing/db.js")
//const {SingupModel}=require("./Model/singupModel.js")
const {authController}=require("./Routs/authRout.js")
const {blogConroller}=require("./Routs/blogRout.js")

const app=express()
app.use(express.json())

var cors = require('cors')
app.use(cors())
app.use("/", authController)
app.use("/blog",blogConroller)

app.get("/", (req, res) => {
    res.send("Homepage")
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