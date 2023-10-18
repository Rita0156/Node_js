 const mongoose=require("mongoose");

 const connection=mongoose.connect("mongodb+srv://Rita123@cluster0.cgdhjy7.mongodb.net/web21 --apiVersion 1 --username ritachaudhari006");

 const schemaMode=new mongoose.Schema({
    heading:String
 })

 const dataModel=mongoose.Model("head",schemaMode)

 export{
    connection,dataModel
 }