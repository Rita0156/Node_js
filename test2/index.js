


const express=require("express")
const {connection}=require("./mong.js")
const app=express()
const {NotenHander}=require("./Routs/noneFu.js")
const {NotenHander}=require("./Routs/loginFu.js")
app.use(express.json())


app.get("/",(req,res)=>{
     res.send("Welcome to Homepage")
})
app.get("/",NotenHander)
app.listen(8000,async()=>{
    try{
      const conn=  await connection()
      console.log("connected successfully")
    }
    catch(err){
        console.log("failed to connect")
         console.log(err)
    }
    console.log("listing port 8000")
})