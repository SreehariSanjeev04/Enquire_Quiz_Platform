const express = require('express');
const Mongoose = require('mongoose');
const ResponseSchema = new Mongoose.Schema({
    user: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },
    response: { 
        type: Map,
        of: String
    },
    score: {
        type: Number,
        default: 0
    },
    timestamp: { type: Date, default: Date.now }
});

const ResponseModel = Mongoose.model('Responses', ResponseSchema);

module.exports = ResponseModel;