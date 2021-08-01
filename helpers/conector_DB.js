const mongoose = require('mongoose');
const {
    URL_ATLAS
} = require('../configs/config');

module.exports = {
    _mongooseConnector: () => {
        mongoose.connect(URL_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    }
};
