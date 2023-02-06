const express = require('express')
const app = express() //ใช้งาน express

app.use((req,res) =>{
    res.send("Hello Express.js")
})

app.listen(8080,()=>{//กำหนดพอต
    console.log("listening on at port 8080")


})