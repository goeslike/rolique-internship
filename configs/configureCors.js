const { ALLOWED_ORIGIN } = require('./config');
const { ErrorHandler, errorMassages: { CORS_NOT_ALLOWED } } = require('../errors');
const { FORBIDDEN } = require('../constants/response.status.enum');

const configureCors = (origin, callback) => {
    const whiteList = ALLOWED_ORIGIN.split(';');

    if (!origin) {
        return callback(null, true);
    }

    if (!whiteList.includes(origin)) {
        return callback(new ErrorHandler(FORBIDDEN, CORS_NOT_ALLOWED.message), false);
    }

    return callback(null, true);
};
module.exports = configureCors;
