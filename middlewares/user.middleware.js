const { ErrorHandler, errorCodesEnum, errorCustomCodes } = require('../errors');
const { userService } = require('../services');

module.exports = {
    checkIsUserExists: async (req, res, next) => {
        try {
            const { email } = req.body;
            const user = await userService.findOneByParams({ email });

            if (!user) {
                return next(new ErrorHandler(errorCodesEnum.BAD_REQUEST, errorCustomCodes.USER_NOT_FOUND));
            }

            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    }
};
