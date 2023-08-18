

const express = require('express')
const {valid}  = require('../middleware/validation')
const {register} = require('../middleware/register')

const router = express.Router()

router.post('/login',valid,register)

module.exports = router