const { ErrorHandler, errorMassages } = require('../errors');
const { statusCode } = require('../constants');

module.exports = {
    checkRole: (whoHaveAccess = [], action = '') => (req, res, next) => {
        try {
            const { userId, params: { id } } = req;

            if (!whoHaveAccess.length) {
                return next();
            }
            switch (action) {
                case 'create':

                    if (!whoHaveAccess.includes(userId.role)) {
                        throw new ErrorHandler(statusCode.FORBIDDEN, errorMassages.FORBIDDEN);
                    }
                    break;

                case 'update':
                    if (!whoHaveAccess.includes(userId.role)) {
                        if (userId.role === 'employee' && userId._id !== id) { // employee can edit his own profile
                            throw new ErrorHandler(statusCode.FORBIDDEN, errorMassages.FORBIDDEN);
                        }
                    }
                    break;
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
                throw new ErrorHandler(statusCode.FORBIDDEN, errorMassages.CREATE_ADMIN_IS_FORBIDDEN);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
