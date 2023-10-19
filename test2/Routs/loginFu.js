



//const express=require("express")
const {LogModel}=require("./Pages/login.js")
const {Router}=require("express")
const LoginHander=Router()
LoginHander.post("/login",async(req,res)=>{
   const payload=req.body()
   const newData=new LogModel(payload)
    await newData.save()
    res.send("login successful")
})