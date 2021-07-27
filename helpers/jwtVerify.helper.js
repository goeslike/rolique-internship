const jwt = require('jsonwebtoken');

const { ErrorHandler, errorMassages } = require('../errors');
const { config: { JWT_SECRET, JWT_REFRESH_SECRET } } = require('../configs');
const { statusCode } = require('../constants');

const jwtVerify = async (action, token) => {
    let isValid;

    switch (action) {
        case 'access':
            isValid = await jwt.verify(token, JWT_SECRET, (err) => {
                if (err) {
                    throw new ErrorHandler(statusCode.BAD_REQUEST, errorMassages.NOT_VALID_TOKEN);
                }
            });
            break;

        case 'refresh':
            isValid = await jwt.verify(token, JWT_REFRESH_SECRET, (err) => {
                if (err) {
                    throw new ErrorHandler(statusCode.BAD_REQUEST, errorMassages.NOT_VALID_REFRESH_TOKEN);
                }
            });
            break;

        default:
            throw new ErrorHandler(statusCode.SERVER_ERROR, errorMassages.WRONG_ACTION);
    }
    return isValid;
};
module.exports = { jwtVerify };
