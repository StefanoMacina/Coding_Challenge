//const { User } = require("../../db");

const getCurrentUserInfo = async (req, res) => {
    //const {_id} = req.user;

    try{

        //const user = await User.findOne({_id}, "-password -__v", {lean: true});

        return res.status(200).json(req.user);

    }
    catch(e){
        console.log(e);
        return res.status(500).json({message: "Internal Server Error"});
    }

}

module.exports = {
    getCurrentUserInfo
}