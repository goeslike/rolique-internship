const jwt = require('jsonwebtoken');

const { ErrorHandler, errorCodesEnum, errorCustomCodes } = require('../errors');
const { config: { JWT_SECRET, JWT_REFRESH_SECRET } } = require('../configs');

const jwtVerify = async (action, token) => {
    let isValid;

    switch (action) {
        case 'access':
            isValid = await jwt.verify(token, JWT_SECRET, (err) => {
                if (err) {
                    throw new ErrorHandler(errorCodesEnum.BAD_REQUEST, errorCustomCodes.NOT_VALID_TOKEN);
                }
            });
            break;

        case 'refresh':
            isValid = await jwt.verify(token, JWT_REFRESH_SECRET, (err) => {
                if (err) {
                    throw new ErrorHandler(errorCodesEnum.BAD_REQUEST, errorCustomCodes.NOT_VALID_REFRESH_TOKEN);
                }
            });
            break;

        default:
            throw new ErrorHandler(errorCodesEnum.SERVER_ERROR, errorCustomCodes.WRONG_ACTION);
    }
    return isValid;
};
module.exports = { jwtVerify };
