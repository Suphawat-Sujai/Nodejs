const http = require('http')
const fs = require('fs')

const indexpage = fs.readFileSync(`${__dirname}/webpages/index.html`)
const server = http.createServer(function (req, res){
    const pathname = req.url
    console.log("url = ",pathname)
    if(pathname === "/" || pathname === "/main"){
        const myhtml =`
        <h1>Hello world</h1>
        <p style = "color:green" >By suphawat sujai</p>`
        res.end(indexpage)
    }else if(pathname === "/product"){
        res.end("<h1>Hello Products</h1>")
    }else{
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
        

   
    
})

server.listen(3000,'localhost',()=>{
    console.log("Started server on port 3000")
})