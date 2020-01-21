
const Joi = require('joi');
const mongoose = require('mongoose');

const Plan = mongoose.model('Plan',new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    dietId: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    data: [
        {
            time: { type: Date, default: Date.now},
            meal: { type: String }
        }
    ],
    
    
}));

function validatePost(plan){
    const schema = {
        userId: Joi.string().min(3).required(),
        dietId: Joi.string().min(3).required(),
        meal: Joi.string().optional()
    };
    return Joi.validate(plan, schema);
}

exports.Plan = Plan;
exports.validatePost = validatePost;
