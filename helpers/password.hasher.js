const bcrypt = require('bcrypt');
const ErrorHandler = require('../errors');
const { errorCodesEnum, errorCustomCodes } = require('../errors');
const { constants } = require('../constants');

module.exports = {
    compare: async (hashedPassword, password) => {
        const isPasswordMatched = await bcrypt.compare(hashedPassword, password);

        if (!isPasswordMatched) {
            throw new ErrorHandler(
                errorCodesEnum.NOT_FOUND,
                constants.PASSWORD_IS_INVALID,
                errorCustomCodes.USER_NOT_FOUND.customCode
            );
        }
    },
    hash: (password) => bcrypt.hash(password, 10)
};
