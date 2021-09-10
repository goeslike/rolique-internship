module.exports = {
    PORT: process.env.PORT || 3000,
    SENTRY_DSN: process.env.SENTRY_DSN,
    URL_ATLAS: process.env.URL_ATLAS,

    JWT_SECRET: process.env.JWT_SECRET,
    JWT_SECRET_LIFETIME: process.env.JWT_SECRET_LIFETIME,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    JWT_REFRESH_SECRET_LIFETIME: process.env.JWT_REFRESH_SECRET_LIFETIME,

    INTERN_USER_ROLE: 'admin',
    INTERN_USER_FIRST_NAME: 'Admin',
    INTERN_USER_LAST_NAME: 'Rolique',
    INTERN_USER_EMAIL: process.env.INTERN_USER_EMAIL,
    INTERN_USER_PASSWORD: process.env.INTERN_USER_PASSWORD,

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,
    ALLOWED_METHODS: 'GET;POST;PUT;DELETE',

    CLOUDINARY_URL: process.env.CLOUDINARY_URL,

    SERVER_RATE_LIMITS: {
        period: 15 * 60 * 1000, // 15 minutes
        maxRequests: 10000
    },

    EMPTY_AVATAR_URL: process.env.EMPTY_AVATAR_URL
};
