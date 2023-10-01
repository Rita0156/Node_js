

const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        return res.end("Welcome to Homepage")
    }
    else if(req.url==="/public"){
        return res.end("Welcome to Public page")
    }
    else if(req.url==="/public/details"){
        return res.end("Welcome to Public detailes",[1,2,3,4,5,6,7])
    }
})

server.listen(8080,()=>{

})