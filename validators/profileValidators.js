const Joi = require('joi');

// Reuse same email rule for profile update
const emailRule = Joi.string()
    .email({ tlds: { allow: false } })
    .pattern(/^[a-z]/)
    .required()
    .messages({
        'string.pattern.base': 'Email must not start with a capital letter',
        'string.email': 'Invalid email format',
        'any.required': 'Email is required',
    });

const profileUpdateSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'Name is required',
    }),
    email: emailRule,
});

module.exports = { profileUpdateSchema };
