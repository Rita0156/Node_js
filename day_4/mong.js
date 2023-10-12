
const mongoosh=require("mongoose")

const connection=mongoosh.connect("mongodb://127.0.0.1:27017/web21")

const connectDb=async()=>{
    console.log("connected to db")
    const result=await ModelMark.find()
    console.log(result)
      
    const new_Mark= await ModelMark.insertMany([{
        mark1:80,
        mark2:50,
        remark:"average"
     }])

     console.log(new_Mark)

     connection.disconnect()
}

connectDb()

const markModel=mongoosh.Schema({
    mark1:Number,
    mark2:Number,
    remark:String
})
const ModelMark=mongoosh.model("mark",markModel)