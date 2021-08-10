const { ErrorHandler, errorMassages: { BAD_REQUEST_ID } } = require('../errors');
const { statusCode } = require('../constants');
const { checkIsRequestIdValidator } = require('../validators');

module.exports = {
    checkIsRequestIdValid: (req, res, next) => {
        try {
            const { id } = req.params;
            const isUserIdValid = checkIsRequestIdValidator(id);

            if (!isUserIdValid) {
                throw new ErrorHandler(statusCode.BAD_REQUEST, BAD_REQUEST_ID.message);
            }
            next();
        } catch (err) {
            next(err);
        }
    }
};
