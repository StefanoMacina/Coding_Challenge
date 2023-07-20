const { Article } = require("../../db");

const getAllArticles = async (_, res) => {
    try {
        const articles = await Article.find({}, null, { lean: true });
        return res.status(200).json(articles);
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    getAllArticles,
};