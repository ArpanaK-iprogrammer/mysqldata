const Joi = require('joi')

//User-defined function to validate the user
exports.validateUser_login = (user) => {
    const JoiSchema = Joi.object({
        email: Joi.string()
                .email()
                .min(4)
                .max(30)
                .required(),
        password: Joi.string()
                .min(4)
                .max(50)
                .required(),
    }).options({ abortEarly: false });
    return JoiSchema.validate(user)
}
