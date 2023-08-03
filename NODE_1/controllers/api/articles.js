const Joi = require("joi");
const { Article } = require("../../db");

const getAllArticles = async (_, res) => {
    try {
        const articles = await Article.find({}, null, { lean: true }).populate("author", "firstName lastName").populate("category", "name");
        return res.status(200).json(articles);
    } catch (error) {
        console.log(error);
    };
};

const createArticle = async (req, res) => {

    const author = req.user._id;

    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        category: Joi.string().optional(),
    });

    try {
        const data = await schema.validateAsync(req.body);
        data.author = author;

       const article = await Article.create(data);
       return res.status(201).json(article)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllArticles,
    createArticle,
};