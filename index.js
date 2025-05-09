const express = require("express")
const cors =require("cors")
const mongoose = require('mongoose');
const routerUsers = require("./routes/usersRoutes")
const routerProducts=require("./routes/productRoutes")
const app = express() 
require('dotenv').config()
const DB= process.env.DB_URL 
const PORT= process.env.PORT 
console.log(DB)
const DB_mongo = mongoose.connect(DB)
.then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use(cors())





app.get("/", (req , res)=>{
    return res.status(200).json("done") 
}) 

app.use("/api/users", routerUsers)
app.use("/api/products", routerProducts)
app.use( (req,res)=>{
    return res.status(500).json({
        status: 500,
        data: {data:null , message: "invalid router"}

    }) 
})
// app.listen(PORT,()=>{
//        console.log("OK")
//        console.log(`http://localhost:${PORT}`)
//        console.log( `${DB_mongo}`)
//     })
module.exports = app;

