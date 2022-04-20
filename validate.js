const joi = require('@hapi/joi')

const validateStudent = (data)=>{
    const studentConstraint = joi.object({
        name: joi.string().required().min(4).max(20),
        college: joi.required(),
        course: joi.required()
    })

    return studentConstraint.validate(data)
}

module.exports.studentConstraint = validateStudent