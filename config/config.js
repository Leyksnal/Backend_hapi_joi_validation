const mongoose = require('mongoose')
const url = "mongodb+srv://leke:codelab2020@cluster0.pymrv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url).then((req, res)=>{
    console.log(`Connected to the database`)
}).catch((error)=>{
    console.log(`Not connected`)
})