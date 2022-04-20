const express = require('express')
const { postStudent, getAllStudent } = require('../controller/controller')

const routes = express.Router()

routes
.route('/sudo')
.post(postStudent)
.get(getAllStudent)

module.exports = routes