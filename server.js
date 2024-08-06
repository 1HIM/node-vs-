const express = require('express')
const contactRoute = require("./routes/contactRoute")
const connect = require('./config/connectdb')
const app = express()


const port = 5000

connect()

app.use(express.json())
app.use('/contact',contactRoute)


app.listen(port,(err)=>{err?console.log(err):console.log(`go to the port ${port}`)})