
const express=require("express");
const fs=require("fs")
const app=express();

app.get("/",(req,res)=>{
  const  data=fs.readFileSync("./db,json","utf-8")
    res.send(data)
})
app.post("/",(req,res)=>{
    

   const data=fs.readFileSync("./db,json","utf-8")

   const payload=req.body
    const strigFyData=JSON.parse(payload)
  const newData=[...data,strigFyData]
    res.send(newData)
})
app.put("/",(req,res)=>{
    
    const data=fs.readFileSync("./db,json","utf-8")
    
    res.send("Welcome to HomePage")
})
app.patch("/",(req,res)=>{
    const data=fs.readFileSync("./db,json","utf-8")
    res.send("Welcome to HomePage")
})
app.delete("/",(req,res)=>{
    const data=fs.readFileSync("./db,json","utf-8")
    res.send("Welcome to HomePage")
})

app.listen(8080,()=>{
    console.log("server is started");
})





