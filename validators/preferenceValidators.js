const Joi = require('joi');

const preferenceSchema = Joi.object({
    theme: Joi.string().required(),
    layout: Joi.string().required(),
})

module.exports = { preferenceSchema };