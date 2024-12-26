const joi = require('joi');
const jwt = require('jsonwebtoken');

const registerValidation = (req,res,next) => {
    const schema = joi.object({
        name:joi.string().min(3).required(),
        email:joi.string().min(6).required().email(),
        password:joi.string().min(6).pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required().messages({
          'string.pattern.base': 'Password must contain at least one letter, one number, and one special character, and be at least 8 characters long.',
          'string.empty': 'Password is required.',
        })
    })
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    next();
}

const loginValidation = (req,res,next) => {
    console.log(req.body);
    const schema = joi.object({
        email:joi.string().min(6).required().email(),
        password:joi.string().min(6).required()
    })
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    next();
}

module.exports = {registerValidation,loginValidation};