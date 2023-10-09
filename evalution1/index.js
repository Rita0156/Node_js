
const express=require("express")

const app=express();

const fs=require("fs")

app.get("/",(req,res)=>{

    const data=fs.readFileSync("./post.json","utf-8")

    res.send(data)


})

app.post("/:post",(req,res)=>{

    const payload=req.body
    const newData=JSON.parse(payload)
    const data=fs.readFileSync("./post.json","utf-8")
    const stringifyData=JSON.stringify([...data,newData])
    res.send(stringifyData)
})

app.delete("/",(req,res)=>{

    res.send("It is deleted !")
})

app.listen(8080, ()=>{
    console.log("server in runnug")
})