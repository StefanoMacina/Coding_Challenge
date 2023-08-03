const express = require('express');
const { authUser } = require('../../../middlewares/auth');
const { createArticle, getAllArticles } = require('../../../controllers/api/articles');
const app = express.Router();


/**
 * @path /api/articles
 */
app.post("/", authUser("AUTHOR"), createArticle);

app.get('/', getAllArticles)




module.exports = app;