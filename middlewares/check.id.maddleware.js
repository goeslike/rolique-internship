const { ErrorHandler, errorMassages: { BAD_REQUEST_ID } } = require('../errors');
const { statusCode } = require('../constants');
const { userIdValidator } = require('../validators');

module.exports = {
    checkIsRequestIdValid: (req, res, next) => {
        try {
            const { id } = req.params;
            const isUserIdValid = userIdValidator(id);

            if (!isUserIdValid) {
                throw new ErrorHandler(statusCode.BAD_REQUEST, BAD_REQUEST_ID.message, BAD_REQUEST_ID.customCode);
            }
            next();
        } catch (err) {
            next(err);
        }
    }
};
