const jwt = require('jsonwebtoken');

const { ErrorHandler, errorMassages: { NOT_VALID_TOKEN, NOT_VALID_REFRESH_TOKEN, WRONG_ACTION } } = require('../errors');
const { config: { JWT_SECRET, JWT_REFRESH_SECRET } } = require('../configs');
const { BAD_REQUEST, SERVER_ERROR } = require('../constants/response.status.enum');

const jwtVerify = async (action, token) => {
    let isValid;

    switch (action) {
        case 'access':
            isValid = await jwt.verify(token, JWT_SECRET, (err) => {
                if (err) {
                    throw new ErrorHandler(BAD_REQUEST, NOT_VALID_TOKEN.message);
                }
            });
            break;

        case 'refresh':
            isValid = await jwt.verify(token, JWT_REFRESH_SECRET, (err) => {
                if (err) {
                    throw new ErrorHandler(BAD_REQUEST, NOT_VALID_REFRESH_TOKEN.message);
                }
            });
            break;

        default:
            throw new ErrorHandler(SERVER_ERROR, WRONG_ACTION.message);
    }
    return isValid;
};
module.exports = { jwtVerify };
