module.exports = {
    PORT: process.env.PORT || 3000,
    SENTRY_DSN: process.env.SENTRY_DSN || 'https://0644e63b2e03416fa2c2f755ad4f2c8c@o926642.ingest.sentry.io/5876207',
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
    ALLOWED_METHODS: process.env.ALLOWED_METHODS || 'GET;POST;PUT;DELETE',

    SERVER_RATE_LIMITS: {
        period: 15 * 60 * 1000, // 15 minutes
        maxRequests: 10000
    },

    CLOUDINARY_URL: process.env.CLOUDINARY_URL || 'cloudinary://112271864237133:kYVdgdr_Lb0u2NY11GiDRvcwrmc@nataliia',
    CLOUD_NAME: process.env.CLOUD_NAME || 'nataliia',
    API_KEY_CLOUD: process.env.API_KEY_CLOUD || '112271864237133',
    API_SECRET_CLOUD: process.env.API_SECRET_CLOUD || 'kYVdgdr_Lb0u2NY11GiDRvcwrmc',
    INSTAGRAM_LOGIN: process.env.INSTAGRAM_LOGIN || '',
    INSTAGRAM_PASSWORD: process.env.INSTAGRAM_PASSWORD || ''
};
