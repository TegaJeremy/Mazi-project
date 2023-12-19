const express = require ('express')
const router = express.Router()
const { registerAgent }= require('../controller/agentController')



router.route("/loginAgent").post(registerAgent)

module.exports = router