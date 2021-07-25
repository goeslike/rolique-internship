const { ErrorHandler, errorCodesEnum, errorCustomCodes } = require('../errors');

module.exports = {
    checkRole: (whoHaveAccess = []) => (req, res, next) => {
        try {
            const { userId } = req;

            if (!whoHaveAccess.length) {
                return next();
            }

            if (!whoHaveAccess.includes(userId.role)) {
                throw new ErrorHandler(errorCodesEnum.FORBIDDEN, errorCustomCodes.FORBIDDEN);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    isManager: (req, res, next) => {
        try {
            const { body: { role }, userId } = req;

            if (userId.role === 'manager' && role === 'admin') {
                throw new ErrorHandler(errorCodesEnum.FORBIDDEN, errorCustomCodes.CREATE_ADMIN_IS_FORBIDDEN);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
