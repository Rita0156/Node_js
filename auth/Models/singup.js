
const mongoose=require("mongoose")

const ModelSchema=new mongoose.Schema({
    email:String,
    password:String,
    userName:String,
    age:Number
})

const SingUpModel=mongoose.model("user",ModelSchema)

module.exports={SingUpModel}