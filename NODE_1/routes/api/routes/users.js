const express = require('express');
const { getAllUsers, getUserById } = require('../../../controllers/api/users');
const { authUser } = require('../../middlewares/auth');
const app = express.Router()


/**
 *   get all users
 * @path /api/users
 */
app.get('/', getAllUsers)

/**
 *  get user by id
 * @path /api/users/:id
 */
app.post('/:id', authUser(2) ,getUserById)

module.exports = app