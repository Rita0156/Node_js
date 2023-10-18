

const {NoteModel}=require("./Pages/note.js")


const {Router}=require("Router")
const NotenHander=Router()
 NoteHander.post("/login",(req,res)=>{
   const {email,password}=req.body()
   if(email&&password){
    res.send("login successfull")
   }
   else{
    res.send("email or password is incorrect")
   }
})