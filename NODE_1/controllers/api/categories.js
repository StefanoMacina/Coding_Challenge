const Joi = require("joi");
const { Category } = require("../../db");

const createCategory = async (req, res) => {
    const schema = Joi.object().keys({
        name: Joi.string().required(),
    })

    try {
        const data = await schema.validateAsync(req.body);
        const category = await Category.create(data);
        return res.status(201).json(category)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createCategory,
}