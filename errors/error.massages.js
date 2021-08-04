module.exports = {
    RECORD_NOT_FOUND: {
        message: 'Record not found',
    },
    NOT_EXIST_USER_WITH_SUCH_TOKEN: {
    },
    BAD_REQUEST: {
        message: 'Body has not valid value',
    },
    WRONG_EMAIL_OR_PASSWORD: {
        message: 'Wrong email or password',
    },
    TOKEN_IS_REQUIRED: {
        message: 'Token is required',
    },
    LARGE_FILE_SIZE: {
        message: (name) => `File ${name} is too big`,
    },
    AVATAR_ERROR: {
        massages: 'Choose only one photo for avatar',
    },
    BAD_REQUEST_ID: {
        message: 'Param ID has not valid value',
    },
    USER_ALREADY_REGISTERED: {
        message: 'User is already registered',
    },
    NOT_VALID_TOKEN: {
        message: 'Not valid token',
    },
    NOT_VALID_REFRESH_TOKEN: {
        message: 'Not valid refresh token',
    },
    FORBIDDEN: {
        message: 'Access denied',
    },
    CREATE_ADMIN_IS_FORBIDDEN: {
        message: 'Create admin role is forbidden',
    },
    WRONG_ACTION: {
        message: 'Wrong action',
    },
    WRONG_MAIL_ACTION: {
        message: 'Wrong email action',
    },
    CORS_NOT_ALLOWED: {
        message: 'Cors not allowed'
    }
};
