const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB;

mongoose.connect(uri)
    .then(() => console.log("Connected to MongoDB...."))
    .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));


const userSchema = new mongoose.Schema({
    name : {type: String,required: true},
    email : {type: String},
    password : {type: String},
    school : {type: String},
    district : String,
    phone : Number,
    classes : String,
    role : {type:String,default:"User"}
},{
    versionKey : false
})


const users = mongoose.model('User',userSchema);

module.exports = {mongoose,users}; 
