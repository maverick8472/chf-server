
const Joi = require('joi');
const mongoose = require('mongoose');

const Meal = mongoose.model('Meal',new mongoose.Schema({
    name: {
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
        type: number,
        required: true
    }
    
}));

function validatePost(meal){
    const schema = {
        name: Joi.string().min(3).required(),
        type: Joi.string().min(3).required(),
        calories: Joi.number().optional()
    };
    return Joi.validate(meal, schema);
}

exports.Meal = Meal;
exports.validatePost = validatePost;
