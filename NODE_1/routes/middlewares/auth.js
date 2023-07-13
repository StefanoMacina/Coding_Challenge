const authUser = (level = 0) => (req, res, next) => {
     // controlli utente
     const lvl = req.body.level 
     
     const token = req.headers.authorization || false
     console.log(lvl, token);
     if(token && lvl >= level){
        return next()
     } else {
        return res.status(403).json({message : 'you are not authorized'})
     }
}

module.exports = {
    authUser
}