module.exports = {
    USER_NOT_FOUND: {
        customCode: 4040,
        message: 'User with such id or email not exist'
    },
    NOT_EXIST_USER_WITH_SUCH_TOKEN: {
        customCode: 4041
    },
    RECORD_NOT_FOUND: {
        message: 'Record not found',
        customCode: 4042
    },
    BAD_REQUEST: {
        message: 'Body has not valid value',
        customCode: 4000
    },
    WRONG_EMAIL_OR_PASSWORD: {
        customCode: 4001,
        message: 'Wrong email or password'
    },
    TOKEN_IS_REQUIRED: {
        customCode: 4002,
        message: 'Token is required'
    },
    LARGE_FILE_SIZE: {
        message: (name) => `File ${name}  is too big`,
        customCode: 4003
    },
    AVATAR_ERROR: {
        massages: 'Choose only one photo for avatar',
        customCode: 4004
    },
    BAD_REQUEST_ID: {
        message: 'UserID has not valid value',
        customCode: 4005
    },
    USER_ALREADY_REGISTERED: {
        customCode: 4007,
        message: 'User is already registered'
    },
    USER_ALREADY_ACTIVATED: {
        customCode: 4008,
        message: 'User is already activated'
    },
    NOT_VALID_PASSWORD: {
        customCode: 4009,
        message: 'Wrong password'
    },
    NOT_VALID_TOKEN: {
        customCode: 4010,
        message: 'Not valid token'
    },
    NOT_VALID_REFRESH_TOKEN: {
        customCode: 4011,
        message: 'Not valid refresh token'
    },
    FORBIDDEN: {
        customCode: 4030,
        message: 'Access denied'
    },
    CREATE_ADMIN_IS_FORBIDDEN: {
        customCode: 4053,
        message: 'CREAT ADMIN ROLE IS FORBIDDEN'
    },
    WRONG_ACTION: {
        customCode: 5000,
        message: 'Wrong action'
    },
    WRONG_MAIL_ACTION: {
        customCode: 5001,
        message: 'Wrong email action'
    },
};
