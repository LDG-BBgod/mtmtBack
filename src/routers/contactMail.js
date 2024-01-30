const express = require('express')
const { ContactMail } = require('../routersCRUD/index')

const router = express.Router()

router.post('/create', ContactMail.contactMailCreate)

module.exports = router
