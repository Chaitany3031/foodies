
const express = require('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('../src/routes/auth.routes')
const foodRoutes = require('../src/routes/food.routes')
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use('/api/food-item',foodRoutes)

app.get('/',(req,res)=>{
    res.send('hell')
})

module.exports = app