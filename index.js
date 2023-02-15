//ใช้าำหรับสั่ง run server ขึ้นมา
const express = require('express')
const path = require('path')
const app = express() //ใช้งาน express
app.use(express.static(path.join(__dirname,'public')))


app.listen(8080,() =>{//กำหนดพอต
    console.log("listening on at port 8080")
})


