const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');

const { config: { PORT, URL_ATLAS, SERVER_RATE_LIMITS } } = require('./configs');

const Sentry = require('./logger/sentry');
const { apiRouter, authRouter } = require('./routes');
const { corsMiddleware } = require('./middlewares');

const app = express();

function _mongooseConnector() {
    mongoose.connect(URL_ATLAS, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
}
_mongooseConnector();

const serverRequestRateLimit = rateLimit({
    windowMs: SERVER_RATE_LIMITS.period,
    max: SERVER_RATE_LIMITS.maxRequests
});

app.use(corsMiddleware);
app.use(Sentry.Handlers.errorHandler());
app.use(serverRequestRateLimit);
app.use(helmet());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    Sentry.captureException(err);
    res
        .status(err.status || 500)
        .json({
            code: err.customCode || 0,
            message: err.message || ''
        });
});

app.listen(5000, () => {
    console.log(`App has been started on port ${PORT}...`);
});
