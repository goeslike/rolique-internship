const jwt = require('jsonwebtoken');

const {
    JWT_REFRESH_SECRET,
    JWT_REFRESH_SECRET_LIFETIME,
    JWT_SECRET,
    JWT_SECRET_LIFETIME
} = require('../configs/config');

module.exports = () => {
    const access_token = jwt.sign({}, JWT_SECRET, { expiresIn: JWT_SECRET_LIFETIME });
    const refresh_token = jwt.sign({}, JWT_REFRESH_SECRET, { expiresIn: JWT_REFRESH_SECRET_LIFETIME });

    return {
        access_token,
        refresh_token,
    };
};
