
const express=require("express");
const fs=require("fs")
const app=express();
const http=require("http")

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/about",(req,res)=>{
  const  data=fs.readFileSync("./db.json","utf-8")
  const strData=JSON.parse(data)
  //const posts=strData.post
  console.log(strData.products)
    res.send(strData.products)
})
app.post("/about",(req,res)=>{
    
 
  let payload=req.body;
  let add=JSON.parse(payload)
  
  const  dataF=fs.readFileSync("./db.json","utf-8")
  const newData=[...dataF,payload]
  //const strData=JSON.parse(dataF)
  //const posts=strData.post
  //console.log(strData.products)
  console.log(newData,"item added in cart")
    res.send(JSON.stringify(newData.products))

   const data=fs.readFileSync("./db.json","utf-8")

   
})
app.put("/about:id",(req,res)=>{
    
    const data=fs.readFileSync("./db.json","utf-8")
    
    res.send("Welcome to HomePage")
})
app.patch("/about:id",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    res.send("Welcome to HomePage")
})
app.delete("/about:id",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8")
    res.send("Welcome to HomePage")
})

app.listen(8000,()=>{
    console.log("server is started");
})

// post data completed.
//get method completed.
// patch data 





