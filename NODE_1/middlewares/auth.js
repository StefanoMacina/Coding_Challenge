const { User } = require("../db");
const { validateToken } = require("../utilities/auth");

const authUser = (role = "USER") => async (req, res, next) => {

   const isRoleArray = Array.isArray(role);
     
   const bearerToken = req.headers.authorization;

   try{
      if(!bearerToken) throw new Error("Not Authorized");

      const token = bearerToken.replace("Bearer ", "");

      const {_id, role: userRole, email} = validateToken(token);

      const user = await User.findOne({_id, email, role: userRole}, "-password -__v", {lean: true});

      if(!user) throw new Error("Not Authorized");

      if(isRoleArray){
         if(role.indexOf(user.role) === -1) throw new Error("Not Authorized");
      }
      else{
         if (role !== user.role) throw new Error("Not Authorized");
      }

      req.user = user;

      return next();

   }
   catch(e){
      console.log(e);
      res.status(403).json({message: e.message})
   }
}

module.exports = {
    authUser
}