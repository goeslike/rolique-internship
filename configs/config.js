module.exports = {
    PORT: process.env.PORT || 3000,
    SENTRY_DSN: process.env.SENTRY_DSN || '',
    URL_ATLAS: process.env.URL_ATLAS || '',

    JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
    JWT_SECRET_LIFETIME: process.env.JWT_SECRET_LIFETIME || '10m',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'REFRESH_SECRET',
    JWT_REFRESH_SECRET_LIFETIME: process.env.JWT_REFRESH_SECRET_LIFETIME || '30d',
};
