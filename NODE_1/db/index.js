const mongoose = require('mongoose');

const connect = async ( ) => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URI);

        console.log("MongoDB connected");
    } catch (error) {
        throw error;
    };
};

const models = {
    User: require('./models/User'),
    Article: require('./models/Article'),
};

module.exports = {
    connect,
    ...models
};