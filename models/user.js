const Joi = require('joi');
const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    age: {
        type: Number,
        minlength: 2,
        maxlength: 1024,
    },
    height: {
        type: Number,
        minlength: 2,
        maxlength: 1024,
    },
    weight: {
        type: Number,
        minlength: 2,
        maxlength: 1024,
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, role: this.role, username: this.username},config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User',userSchema);

function validateRegister(req){
    const schema = {
        username: Joi.string().min(5).max(50).required().label('Username'),
        password: Joi.string().min(5).max(255).required().label('Password'),
        age: Joi.number().min(2).max(255).optional().label('Age'),
        height: Joi.number().min(2).max(255).optional().label('Height'),
        weight: Joi.number().min(2).max(255).optional().label('Weight'),
        role: Joi.string().min(5).max(255).optional()
    };
    return Joi.validate(req, schema);
}

function validateAuth(req) {
    const schema = {
        username: Joi.string().min(5).max(50).required().label('Username'),
        password: Joi.string().min(5).max(255).required().label('Password'),
    };
  
    return Joi.validate(req, schema);
}

function validateEdit(req){
    const schema = {
        username: Joi.string().min(5).max(50).required().label('Username'),
        password: Joi.string().min(5).max(255).required().label('Password'),

    };

    return Joi.validate(req,schema);
}

function validateRole(req){
    const schema = {
        role: Joi.string().required()
    };
    
    return Joi.validate(req, schema);
}

exports.User = User;
exports.validateRegister = validateRegister;
exports.validateAuth = validateAuth;
exports.validateRole = validateRole;
exports.validateEdit = validateEdit;
