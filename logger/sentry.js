const Sentry = require('@sentry/node');

const { config: { SENTRY_DSN } } = require('../configs');

Sentry.init({ dsn: SENTRY_DSN });

module.exports = Sentry;
