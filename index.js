const http = require('http')

const server = http.createServer(function (req, res){
    const myhtml =`<h1>Hello world</h1>
    <p style = "color:yellow" >By suphawat sujai</p>`

    res.write(myhtml)
    res.end()
    
})

server.listen(3000,'localhost',()=>{
    console.log("Started server on port 3000")
})