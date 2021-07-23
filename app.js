const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const { config: { PORT } } = require('./configs');

const Sentry = require('./logger/sentry');
const { apiRouter } = require('./routes');

const app = express();

function _mongooseConnector() {
    mongoose.connect('впиши тут базу даних', { useNewUrlParser: true, useUnifiedTopology: true });
}
_mongooseConnector();

app.use(Sentry.Handlers.errorHandler());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
