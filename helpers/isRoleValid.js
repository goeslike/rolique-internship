const { ErrorHandler } = require('../errors');
const { errorCodesEnum, errorCustomCodes } = require('../errors');

module.exports = {
    validRole: (role) => {
        const roles = [
            'admin',
            'manager',
            'employee'
        ];
        if (!(roles.includes(role))) {
            throw new ErrorHandler(
                errorCodesEnum.BAD_REQUEST,
                errorCustomCodes.BAD_REQUEST.message,
                errorCustomCodes.BAD_REQUEST.customCode
            );
        }
    }
};
