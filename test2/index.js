


const express=require("express")
const {connection,schemaModel}=require("./mong.js")
const app=express()

app.use(express.json())


app.get("/",(req,res)=>{
     res.send("Welcome to Homepage")
})
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