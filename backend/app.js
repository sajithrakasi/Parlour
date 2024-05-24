const express = require('express')
const connetDB = require('./config/db')
const user = require('./routes/user')
const contact = require('./routes/contact')
const booking = require('./routes/booking')
require('dotenv').config()
const cors = require('cors')


const app = express()
connetDB()

app.use(cors())


app.use('/auth',user)
app.use('/contact',contact)
app.use('/booking',booking)

app.get("/", (req,res) =>{
    res.send("Welcome to the Website")
})

app.listen(process.env.PORT , () => {
    console.log(`Server running on port ${process.env.PORT}`)
})