const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB;

const ConnectDatabase = () => {
    mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB...."))
    .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

}
module.exports = {ConnectDatabase};
