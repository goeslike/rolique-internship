const bcrypt = require('bcrypt');
const {
    ErrorHandler,
    errorMassages: {
        WRONG_EMAIL_OR_PASSWORD
    }
} = require('../errors');
const { statusCode } = require('../constants');

module.exports = {
    compare: async (hashedPassword, password) => {
        const isPasswordMatched = await bcrypt.compare(hashedPassword, password);

        if (!isPasswordMatched) {
            throw new ErrorHandler(
                statusCode.BAD_REQUEST,
                WRONG_EMAIL_OR_PASSWORD.message,
                WRONG_EMAIL_OR_PASSWORD.customCode
            );
        }
    },
    hash: (password) => bcrypt.hash(password, 10)
};
