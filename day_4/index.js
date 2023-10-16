
const {connection,ModelMark}=require("./mong.js")
const express=require("express");

const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to Homepage");
})
app.get("/mark",(res,req)=>{
    const alldata=ModelMark.marks;
    res.send(alldata);
})
app.post("/addmark",(res,req)=>{
    const payload ={mark1,mark2,remark}=req.body();
    const newData=ModelMark.payload.save();
    res.send(newData);


})
app.delete(`/mark:${id}`,(res,req)=>{
    ModelMark.delete({id:id});
    res.send("item deleted");
})

app.listen(7000,async()=>{
    try{
      const data=   await connection();
      console.log("connected successfully");
    }
    catch{
        console.log("failed to connect");
    }
    console.log("running server is 7000 port");
})
//put req is pending
//patch req is pending
// mvc is pending
//work in progress

