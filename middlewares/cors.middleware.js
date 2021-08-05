const { ALLOWED_ORIGIN, ALLOWED_METHODS } = require('../configs/config');
const { ErrorHandler, errorMassages: { CORS_NOT_ALLOWED } } = require('../errors');
const { FORBIDDEN } = require('../constants/response.status.enum');

const configureCors = (origin, method) => {
    const whiteList = ALLOWED_ORIGIN.split(';');
    const methods = ALLOWED_METHODS.split(';');

    if (!origin && methods.includes(method)) { return true; } // FOR postman

    if (!whiteList.includes(origin)) {
        return false;
    }

    return methods.includes(method);
};

module.exports = (async (req, res, next) => {
    try {
        const origin = req.get('Origin');
        const { method } = req;
        const access = await configureCors(origin, method);

        if (!access) {
            throw new ErrorHandler(FORBIDDEN, CORS_NOT_ALLOWED.message);
        }

        next();
    } catch (e) {
        next(e);
    }
});
