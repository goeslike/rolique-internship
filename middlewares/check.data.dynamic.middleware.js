const {
    ErrorHandler,
    errorMassages: { RECORD_NOT_FOUND }
} = require('../errors');
const { userService } = require('../services');
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
    },
    checkIsUserDataExist: (paramName, searchIn = 'body', dataKey = paramName) => async (req, res, next) => {
        try {
            const value = req[searchIn][paramName];

            const user = await userService.findOneByParams({ [dataKey]: value });

            if (!user) {
                throw new ErrorHandler(statusCode.NOT_FOUND, RECORD_NOT_FOUND.message);
            }
            req.user = user;
            next();
        } catch (err) {
            next(err);
        }
    }
};
