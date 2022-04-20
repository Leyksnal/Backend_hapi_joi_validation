const mongoose = require('mongoose')
const Schema = mongoose.Schema


const studentShape = new Schema({
    name:{
        type: String,
        required: true
    },
    college:{
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    }
})

const studentModel = mongoose.model("StudentValidation", studentShape)
module.exports = {
    studentModel
}

