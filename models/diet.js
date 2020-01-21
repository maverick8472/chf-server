
const Joi = require('joi');
const mongoose = require('mongoose');

const Diet = mongoose.model('Diet',new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    type: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    calories: {
        type: Number,
        required: true
    }
    
}));

function validatePost(diet){
    const schema = {
        userId: Joi.string().min(3).required(),
        type: Joi.string().min(3).required(),
        calories: Joi.number().optional()
    };
    return Joi.validate(diet, schema);
}

exports.Diet = Diet;
exports.validatePost = validatePost;
