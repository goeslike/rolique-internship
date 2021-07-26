const { User } = require('../dataBase');

module.exports = {
    createUser: (userObject) => User.create(userObject),

    findOneByParams: (params) => User.findOne(params),

    updateUser: (query, updateInfo) => User.updateOne(query, updateInfo),

    getAllUsers: () => User.find({ isDeleted: false }),
};
