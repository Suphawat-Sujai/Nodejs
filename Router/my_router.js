//จัดการ Routing การรับส่งข้อมูล
const express = require('express')
const router = express.Router()
const path = require('path')

//อ้างอิงตำเเหน่งไฟล์
const index_checkin = path.join(__dirname,"webpages/Checkin.html") //wไปที่ nodejs
// const index_contact = path.join(__dirname,"webpages/Contact.html")
// const index_login = path.join(__dirname,"webpages/login.html")

router.get("/",(req,res) =>{ //พาทเริ่มต้น fiel checkin
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,"../webpages/Checkin.html")) //ส่งข้อมูลไปยังไฟล์ที่อ้างอิงตำเเหน่งไว้
})

router.get("/contact",(req,res) =>{ //พาทเริ่มต้น file contect
     res.status(200)
     res.type('text/html')
     res.sendFile(path.join(__dirname,"../webpages/Contact.html")) //ส่งข้อมูลไปยังไฟล์ที่อ้างอิงตำเเหน่งไว้
 })

router.get("/login",(req,res) =>{ //พาทเริ่มต้น file login
     res.status(200)
     res.type('text/html')
     res.sendFile(path.join(__dirname,"../webpages/login.html")) //ส่งข้อมูลไปยังไฟล์ที่อ้างอิงตำเเหน่งไว้
 })


module.exports = router