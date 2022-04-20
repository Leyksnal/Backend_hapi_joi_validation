const joi = require('@hapi/joi')

const validateStudent = (data)=>{
    const studentConstraint = joi.object({
        name: joi.required().min(4).max(20),
        college: joi.required(),
        course: joi.required()
    })

    return joi.studentConstraint.validate(data)
}

module.exports.studentConstraint = validateStudent