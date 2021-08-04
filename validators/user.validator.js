const Joi = require('joi');
const { regexp } = require('../constants');

module.exports = {
    createUser: Joi.object().keys({
        firstname: Joi.string()
            .required()
            .min(2)
            .max(47),
        lastname: Joi.string()
            .required()
            .min(2)
            .max(47),
        email: Joi.string()
            .regex(regexp.EMAIL_REGEXP)
            .required(),
        phone: Joi.string(),
        // .regex(regexp.PHONE_REGEXP)
        role: Joi.string()
            .required(),
        password: Joi.string()
            .regex(regexp.PASSWORD_REGEXP)
            .required()
        // avatar: Joi.any()
    }),

    updateUser: Joi.object().keys({
        firstname: Joi.string()
            .min(2)
            .max(47),
        lastname: Joi.string()
            .min(2)
            .max(47),
        email: Joi.string()
            .regex(regexp.EMAIL_REGEXP),
        phone: Joi.number(),
        role: Joi.string(),
        password: Joi.string()
            .regex(regexp.PASSWORD_REGEXP)
            .min(6)
            .max(69)
    }),

    idUser: Joi.string()
        .min(24)
        .max(24)
        .id()
};
