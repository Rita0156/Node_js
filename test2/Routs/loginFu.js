



//const express=require("express")
const {LogModel}=require("./Pages/login.js")
const {Router}=require("Router")
const LoginHander=Router()
 LoginHander.post("/login",(req,res)=>{
   const {email,password}=req.body()
   if(email&&password){
    res.send("login successfull")
   }
   else{
    res.send("email or password is incorrect")
   }
})