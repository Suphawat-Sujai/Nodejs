const http = require('http')
const fs = require('fs')

const checkinpage = fs.readFileSync(`${__dirname}/webpages/Checkin.html`,'uft-8')
const contactpage = fs.readFileSync(`${__dirname}/webpages/Contact.html`,'uft-8')
const loginpage = fs.readFileSync(`${__dirname}/webpages/login.html`,'uft-8')

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