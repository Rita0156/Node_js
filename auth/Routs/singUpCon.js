

const {SingUpModel}=require("../Models/singup")
const mongoose=require("mongoose")
const {Router}=require("express")
const Singupcontroller=Router()

Singupcontroller.post("/adduser",async(req,res)=>{
        const payload=req.body()
        const user=new SingUpModel(payload)
        await user.save()
        res.send("Sing Up Successfull")
})

Singupcontroller.post("/user",async(req,res)=>{
    const data=req.body()
    const valid= await SingUpModel.findOne(data)
    const token=jwt.sing({})
})

module.exports={Singupcontroller}