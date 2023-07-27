const express = require('express')
const { getUserToken } = require('../../controllers/auth')


const app = express.Router()

/**
 * @path /auth/token
 */
app.post('/token', getUserToken);


module.exports = app