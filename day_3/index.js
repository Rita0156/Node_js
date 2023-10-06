
const express=require("express");
const fs=require("fs")
const app=express();

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/about",(req,res)=>{
  const  data=fs.readFileSync("./db.json","utf-8")
    res.send(data)
})
app.post("/about",(req,res)=>{
    

   const data=fs.readFileSync("./db.json","utf-8")

   const payload=req.body
    const strigFyData=JSON.parse(payload)
  const newData=[...data,strigFyData]
    res.send(newData)
    console.log("data added")
})
app.put("/about",(req,res)=>{
    
    const data=fs.readFileSync("./db.json","utf-8")
    
    res.send("Welcome to HomePage")
})
app.patch("/about",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    res.send("Welcome to HomePage")
})
app.delete("/about",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    res.send("Welcome to HomePage")
})

app.listen(8080,()=>{
    console.log("server is started");
})

// post data completed.
//get method completed.
// patch data 





