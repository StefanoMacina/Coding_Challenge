const express = require('express');
const { getAllUsers, getUserById, createUser } = require('../../../controllers/api/users');
const { authUser } = require('../../../middlewares/auth');
const app = express.Router()


/**
 *   get all users
 * @path /api/users
 */
app.get('/', getAllUsers)



/**
 *  create new user
 * @path /api/users
 */
app.post("/", createUser)

module.exports = app