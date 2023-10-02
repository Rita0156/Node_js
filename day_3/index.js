
const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("Welcome to HomePage")
})
app.post("/",(req,res)=>{
    res.send("Welcome to HomePage")
})
app.put("/",(req,res)=>{
    res.send("Welcome to HomePage")
})
app.patch("/",(req,res)=>{
    res.send("Welcome to HomePage")
})
app.delete("/",(req,res)=>{
    res.send("Welcome to HomePage")
})

app.listen(8080,()=>{
    console.log("server is started");
})





