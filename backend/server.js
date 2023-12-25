const express = require('express')
const app = express()
const {dbConnect} = require('./utiles/db')
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser') 
const cookieParser = require('cookie-parser') 

app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api',require('./routes/authRoutes'))
app.get('/',(req,res)=> res.send('HELLOW WORDL'))
app.listen(port,async ()=>{
  await dbConnect()
    console.log(`server is runnig on port ${port}`)})