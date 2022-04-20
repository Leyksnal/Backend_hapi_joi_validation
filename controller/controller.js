const { studentModel } = require('../model/model')

const postStudent = async (req, res) =>{
    try {

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

module.exports ={
    postStudent,
    getAllStudent
}