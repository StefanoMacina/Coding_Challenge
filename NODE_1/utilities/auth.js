const jwt = require("jsonwebtoken");

const createToken = (payload) => {
    return jwt.sign(payload, process.env.SERVER_PRIVATE_KEY);
}

const validateToken = (token) => {
    return jwt.verify(token, process.env.SERVER_PRIVATE_KEY);
}

module.exports = {
    createToken,
    validateToken
}