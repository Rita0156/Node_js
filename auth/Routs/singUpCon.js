

const {SingUpModel}=require("../Models/singup")
const mongoose=require("mongoose")
const {Router}=require("express")
const Singupcontroller=Router()

SingUpModel.post("/adduser",async(req,res)=>{
        const payload=req.body()
        
})
