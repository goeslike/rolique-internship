const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const { config: { PORT } } = require('./configs');

const Sentry = require('./logger/sentry');
const { apiRouter, authRouter } = require('./routes');

const {corsMiddleware} = require('./middlewares');

const app = express();

const urlAtlas = 'mongodb+srv://admin_test:admin@testproject.v6ryu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
function _mongooseConnector() {
    mongoose.connect(urlAtlas, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
}
_mongooseConnector();

app.use(corsMiddleware);
app.use(Sentry.Handlers.errorHandler());

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
