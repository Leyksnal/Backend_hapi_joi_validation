const { studentModel } = require('../model/model')
const validate = require('../validate')


// Posting to the database
const postStudent = async (req, res) =>{
    try {
        const {error} = validate.studentConstraint(req.body)
        if(error){
            res.status(409).json({
                status: `Fail`,
                message: error.details[0].message
            })
        }

        const data={
            name: req.body.name,
            college: req.body.college,
            course: req.body.course
        }

        const student = await studentModel.create(data)
        res.status(201).json({
            status: `Created successfully`,
            data: {
                student
            }
        })
    } catch (error) {
        res.status(500).json({
            status: `Failed`,
            message: error.message
        })
    }
}

// Get all from the database
const getAllStudent = async (req, res) =>{
    try {

        const student = await studentModel.find()
        res.status(200).json({
            status: `All Database`,
            data: {
                student
            }
        })
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}

// Get one document from the database
const getStudent = async (req, res) =>{
    try {
        
        const student = await studentModel.findById( req.params.id )
        res.status(200).json({
            status: `One student`,
            data: {
                student
            }
        })
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}

// Update one document from the database
const updateStudent = async (req, res) =>{
    try {
        
        const {error} = validate.studentConstraint(req.body)
        if(error){
            res.status(409).json({
                status: `Fail`,
                message: error.details[0].message
            })
        }
        const student = await studentModel.findByIdAndUpdate( req.params.id, req.body, {new: true} )
        res.status(200).json({
            status: `One student updated`,
            data: {
                student
            }
        })
    } catch (error) {
        res.status(404).json({
            status: `Failed`,
            message: error.message
        })
    }
}

module.exports ={
    postStudent,
    getAllStudent,
    getStudent,
    updateStudent
}