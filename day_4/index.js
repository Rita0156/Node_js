
const {connection,ModelMark}=require("./mong.js")
const express=require("express");

const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to Homepage")
})

app.listen(7000,()=>{
    console.log("running server is 7000 port")
})

