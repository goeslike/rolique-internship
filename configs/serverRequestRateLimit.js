const rateLimit = require('express-rate-limit');

const { SERVER_RATE_LIMITS: { period, maxRequests } } = require('./config');

const serverRequestRateLimit = rateLimit({
    windowMs: period,
    max: maxRequests
});

module.exports = serverRequestRateLimit;
