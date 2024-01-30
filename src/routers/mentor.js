const express = require('express')
const { Mentor } = require('../routersCRUD/index')

const router = express.Router()

router.post('/create', Mentor.mentorCreate)

module.exports = router
