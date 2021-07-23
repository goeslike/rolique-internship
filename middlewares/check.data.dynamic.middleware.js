const {
    ErrorHandler,
    errorCodesEnum,
    errorCustomCodes: { BAD_REQUEST }
} = require('../errors');

module.exports = {
    checkIsBodyDataValid: (validatorType, validatorName) => async (req, res, next) => {
        try {
            const { error } = await [validatorType][validatorName].validate(req.body);

            if (error) {
                throw new ErrorHandler(errorCodesEnum.BAD_REQUEST, error.details[0].message, BAD_REQUEST.customCode);
            }

            next();
        } catch (err) {
            next(err);
        }
    }
};
