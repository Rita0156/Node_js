

const {NoteModel}=require("../Pages/note.js")
const mongoose=require("mongoose")
const {Router}=require("express")


//const {Router}=require("Router")
const NotenHander=Router()
 NoteHander.post("/login",async(req,res)=>{
   //const {email,password}=req.body()
   const payload=req.body()
   const new_payload=new NoteModel(payload)
   await new_payload.save()
   res.send("signup successfull")

})
module.exports={NotenHander}