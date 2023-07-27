const Joi = require("joi");
const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const { createToken } = require("../../utilities/auth");

const getUserToken = async (req, res) => {
    const schema = Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
    });

    try{
        const data = await schema.validateAsync(req.body);

        const user = await User.findOne({email: data.email}, null, {lean: true});

        if(!user) throw new Error("User not found");

        const isValidPassword = bcrypt.compareSync(data.password, user.password);

        if(!isValidPassword) throw new Error("User not found");

        const token = createToken({email: user.email, _id: user._id, role: user.role});

        return res.status(201).json({token});

    }
    catch(e){
        console.log(e);
        return res.status(403).json({message: e.message})
    }
};


module.exports = {
    getUserToken
}