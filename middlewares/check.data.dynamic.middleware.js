const { ErrorHandler } = require('../errors');
const { statusCode } = require('../constants');

module.exports = {
    checkIsBodyDataValid: (validatorName) => async (req, res, next) => {
        try {
            const { error } = await validatorName.validate(req.body);
            if (error) {
                throw new ErrorHandler(statusCode.BAD_REQUEST, error.details[0].message);
            }
            next();
        } catch (err) {
            next(err);
        }
    }
};
