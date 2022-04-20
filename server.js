require('./config/config')
const express = require('express')
port = 3111
const allRoutes = require('./route/route')

const app = express()
app.use(express.json())
app.use('/api', allRoutes)

app.get('/', (req, res)=>{
    res.status(200).json({
        status: `working on port: ${port}`,
        message: `Welcome to Vaidation API`
    })
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})