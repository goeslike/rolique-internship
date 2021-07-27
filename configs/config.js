module.exports = {
    PORT: process.env.PORT || 3000,
    SENTRY_DSN: process.env.SENTRY_DSN || '',
    URL_ATLAS: process.env.URL_ATLAS || 'mongodb+srv://admin_test:admin@testproject.v6ryu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

    JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
    JWT_SECRET_LIFETIME: process.env.JWT_SECRET_LIFETIME || '1d',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'REFRESH_SECRET',
    JWT_REFRESH_SECRET_LIFETIME: process.env.JWT_REFRESH_SECRET_LIFETIME || '30d',

    INTERN_USER_ROLE: process.env.INTERN_USER_ROLE || 'admin',
    INTERN_USER_FIRST_NAME: process.env.INTERN_USER_FIRST_NAME || 'Admin',
    INTERN_USER_LAST_NAME: process.env.INTERN_USER_LAST_NAME || 'Rolique',
    INTERN_USER_EMAIL: process.env.INTERN_USER_EMAIL || 'admin@rolique.io',
    INTERN_USER_PASSWORD: process.env.INTERN_USER_PASSWORD || 'p@aS$ww0rD',

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:4200;http://localhost:3000',

    SERVER_RATE_LIMITS: {
        period: 15 * 60 * 1000, // 15 minutes
        maxRequests: 1000
    }
};
