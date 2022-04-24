const mongoose = require('mongoose')
const Schema = mongoose.Schema


const studentShape = new Schema({
    name:{
        type: String,
        unique: true
    },
    college:{
        type: String,
    },
    course:{
        type: String,
    }
})

const studentModel = mongoose.model("hapijoivalidation", studentShape)
module.exports = {
    studentModel
}

