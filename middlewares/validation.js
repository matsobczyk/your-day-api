const Joi = require('joi');
//invitation validation
const inviteRegisterValidation= data => {
    const schema = Joi.object ({
        inv: Joi.string()
            .required(),
        name: Joi.string()
            .required(),
    });
};


//register validation
const registerValidation = data => {
    const schema = Joi.object ({
        name: Joi.string()
            .min(3)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
};

//login validation
const  loginValidation = (data) => {
    const schema = Joi.object ({
        email: Joi.string()
            .min(3)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.inviteRegisterValidation = inviteRegisterValidation;