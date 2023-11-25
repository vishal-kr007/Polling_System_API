
const express = require('express')
const Router = express.Router()
const question_controller = require('../../../controller/QuestionsController')

Router.post('/create', question_controller.create)
Router.get('/view/:id', question_controller.viewDetails)
Router.delete('/delete/:id', question_controller.deleteQuestion)
Router.use('/options', require('./options'))


module.exports = Router