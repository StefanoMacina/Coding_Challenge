const Joi = require("joi");
const {User} = require("../../db");
const bcrypt = require("bcryptjs");


const getAllUsers = async (req, res) => {
    
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    try{
        const users = await User.paginate({}, {lean: true, select:  "-password -__v", limit, page});
        return res.status(200).json(users)
    }
    catch(e){
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const createUser = async (req, res) => {
    const schema = Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    });

    try{
        const data = await schema.validateAsync(req.body);

        data.password = bcrypt.hashSync(data.password, 12);

        const user = await User.create(data);

        delete user.password;
        delete user.role;
        delete user.__v;

        return res.status(201).json({user: user.toJSON()})
    }
    catch(e){
        console.log(e);
        return res.status(500).json({message: "Internal Server Error"});
    }
}


module.exports = { 
    getAllUsers,
    createUser
}