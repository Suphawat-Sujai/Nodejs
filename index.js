//ใช้าำหรับสั่ง run server ขึ้นมา
const express = require('express')
const router = require('./Router/my_router')
const app = express() //ใช้งาน express

app.use(router) //ทำหน้าที่อื่น เเต่เปลั้นยนรเเปลงคำสั่งใช้ router เเทน

app.listen(8080,() =>{//กำหนดพอต
    console.log("listening on at port 8080")
})


