const Joi = require('joi');

// ✅ Email must be valid and start with lowercase
const emailRule = Joi.string()
  .email({ tlds: { allow: false } })
  .pattern(/^[a-z]/)
  .required()
  .messages({
    'string.pattern.base': 'Email must not start with a capital letter',
    'string.email': 'Invalid email format',
    'any.required': 'Email is required',
  });

// ✅ Strong password: min 8 chars & one special character
const strongPassword = Joi.string()
  .min(8)
  .pattern(/[^A-Za-z0-9]/)
  .required()
  .messages({
    'string.min': 'Password must be at least 8 characters long',
    'string.pattern.base': 'Password must include at least one special character',
    'any.required': 'Password is required',
  });

// 🔐 Register validation schema
const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
  }),
  email: emailRule,
  password: strongPassword,
});

// 🔐 Login validation schema
const loginSchema = Joi.object({
  email: emailRule,
  password: Joi.string().min(8).required().messages({
    'string.min': 'Password must be at least 8 characters long',
    'any.required': 'Password is required',
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
};
