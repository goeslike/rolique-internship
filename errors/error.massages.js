module.exports = {
    RECORD_NOT_FOUND: {
        message: 'Record not found',
        customCode: 4040
    },
    NOT_EXIST_USER_WITH_SUCH_TOKEN: {
        customCode: 4041
    },
    BAD_REQUEST: {
        message: 'Body has not valid value',
        customCode: 4000
    },
    WRONG_EMAIL_OR_PASSWORD: {
        message: 'Wrong email or password',
        customCode: 4001
    },
    TOKEN_IS_REQUIRED: {
        message: 'Token is required',
        customCode: 4002
    },
    LARGE_FILE_SIZE: {
        message: (name) => `File ${name} is too big`,
        customCode: 4003
    },
    AVATAR_ERROR: {
        massages: 'Choose only one photo for avatar',
        customCode: 4004
    },
    BAD_REQUEST_ID: {
        message: 'Param ID has not valid value',
        customCode: 4005
    },
    USER_ALREADY_REGISTERED: {
        message: 'User is already registered',
        customCode: 4006
    },
    NOT_VALID_TOKEN: {
        message: 'Not valid token',
        customCode: 4010
    },
    NOT_VALID_REFRESH_TOKEN: {
        message: 'Not valid refresh token',
        customCode: 4011
    },
    FORBIDDEN: {
        message: 'Access denied',
        customCode: 4030
    },
    CREATE_ADMIN_IS_FORBIDDEN: {
        message: 'Create admin role is forbidden',
        customCode: 4053
    },
    WRONG_ACTION: {
        message: 'Wrong action',
        customCode: 5000
    },
    WRONG_MAIL_ACTION: {
        message: 'Wrong email action',
        customCode: 5001
    },
};
