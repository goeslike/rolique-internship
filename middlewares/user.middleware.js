const { ErrorHandler, errorMassages } = require('../errors');
const { userService } = require('../services');
const { statusCode } = require('../constants');

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const { email } = req.body;
            const user = await userService.findOneByParams({ email });

            if (!user) {
                return next(new ErrorHandler(statusCode.BAD_REQUEST, errorMassages.RECORD_NOT_FOUND));
            }

            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    }
};
