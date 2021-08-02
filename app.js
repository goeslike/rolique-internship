const express = require('express');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const mongoose = require('mongoose');
// const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const {
        ALLOWED_ORIGIN, PORT, SERVER_RATE_LIMITS, URL_ATLAS
} = require('./configs/config');

const Sentry = require('./logger/sentry');
const { apiRouter } = require('./routes');
// const cronRun = require('./cron-jobs');

const app = express();

function _mongooseConnector() {
    mongoose.connect(URL_ATLAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}
_mongooseConnector();

// const serverRequestRateLimit = rateLimit({
//     windowMs: SERVER_RATE_LIMITS.period,
//     max: SERVER_RATE_LIMITS.maxRequests
// });

// eslint-disable-next-line no-use-before-define
app.use(cors({ origin: configureCors }));

app.use(Sentry.Handlers.errorHandler());
// app.use(serverRequestRateLimit);
app.use(helmet());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({ useTempFiles: true }));
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
    // cronRun();
});

function configureCors(origin, callback) {
    const whiteList = ALLOWED_ORIGIN.split(';');

    if (!origin) { // FOR postman
        return callback(null, true);
    }

    if (!whiteList.includes(origin)) {
        return callback(new Error('Cors not allowed'), false);
    }

    return callback(null, true);
}
