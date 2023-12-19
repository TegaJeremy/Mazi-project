const express = require('express')
const router = express.Router()
const {register, login} = require('../controller/clientController')

router.route("/registration").post(register)
router.route("/login").post(login)


module.exports= router