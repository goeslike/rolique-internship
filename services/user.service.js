const { User } = require('../dataBase');

module.exports = {
    findOneByParams: (params) => User.findOne(params)
};
