const express = require('express')
const { postStudent, getAllStudent, getStudent, updateStudent } = require('../controller/controller')

const routes = express.Router()

routes
.route('/sudo')
.post(postStudent)
.get(getAllStudent)


routes
.route('/sudo/:id')
.get(getStudent)
.patch(updateStudent)

module.exports = routes