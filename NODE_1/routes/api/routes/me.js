const express = require('express')
const { authUser } = require('../../../middlewares/auth')
const { getCurrentUserInfo } = require('../../../controllers/api/me')


const app = express.Router()

 app.get('/', authUser(["ROLE", "ADMIN"]), getCurrentUserInfo)




module.exports = app