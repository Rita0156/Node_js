
const mongoosh=require("mongoose")

const connection=mongoosh.connect("mongodb://127.0.0.1:27017/web21")

const connectDb=async()=>{
    const result=await Model.find()
      
    const new_Mark= await Model.insertMany([{
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
const Model=mongoosh.model("mark",markModel)