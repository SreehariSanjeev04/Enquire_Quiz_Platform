const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type: String,required: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    school : {type: String, requied: true},
    district : {
        type: String,
        required: true,
        
    },
    phone : {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10,
        unique: true
    },
    classes : {
        type: String,
        required: true,
    },
    role : {type: String, enum: ["User", "Admin"], default: "User"},
    hasAttemptedQuiz: {
        type: Boolean,
        default: false
    }
},{
    versionKey : false
});




const users = mongoose.model('User',userSchema);
module.exports = users;