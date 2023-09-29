

const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        return res.end("Welcome to Homepage")
    }
    else if(req.url==="/public"){
        return res.end("Welcome to Public page")
    }
})

server.listen(8080,()=>{

})