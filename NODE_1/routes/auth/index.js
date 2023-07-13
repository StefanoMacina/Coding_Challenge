const express = require('express')

const app = express.Router()

/**
 * @path /auth/token
 */
app.get('/token' , (req, res) => {
    return res.status(200).json({message : 'success'})
})


module.exports = app