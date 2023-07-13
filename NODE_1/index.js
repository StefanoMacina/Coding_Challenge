require("dotenv").config();
const express = require("express");
const app = express();

const helmet = require('helmet');
const cors = require('cors');

app.use(cors());
app.use(helmet());

app.use(express.urlencoded({extended : true}))
app.use(express.json());

app.get(['/', '/status' , '/ping'], ( _ , res ) => {
    return res.status(200).json({status : 'online'})
});

app.use('/auth', require('./routes/auth'))

app.use('/api', require('./routes/api'))

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server running at http://localhost:${process.env.SERVER_PORT}`);
})