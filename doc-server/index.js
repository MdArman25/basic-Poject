const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const port = process.env.port || 5000
require("dotenv").config()
const app = express();
app.use(express.json())
app.use(cors(
    {
        origin:[
            "http://localhost:5173",
        ]
    }
))
app.get('/',(req,res)=>{
    res.send("Doctor Website Server is Running ")
})
app.listen(port,()=>{
    console.log(`Doctor Website Running On Port ${port}`);
})