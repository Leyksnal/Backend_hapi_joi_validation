const mongoose = require('mongoose')
const url = "mongodb://localhost/validation"

mongoose.connect(url).then((req, res)=>{
    console.log(`Connected to the database`)
}).catch((error)=>{
    console.log(`Not connected`)
})