const express = require('express');
const { authUser } = require('../../../middlewares/auth');
const { createCategory } = require('../../../controllers/api/categories');
const app = express.Router();


/**
 * @path /api/categories
 */

app.post('/', authUser("ADMIN"), createCategory);



module.exports = app;