const { User } = require('../dataBase');
// const { queryBuilder } = require('../helpers');

module.exports = {
    createUser: (userObject) => User.create(userObject),
    findOneByParams: (params) => User.findOne(params),

    findAll: async () => {
        const users = await User.find();

        return users;
    },

    updateOne: async (id, updateObject) => {
        await User.findByIdAndUpdate(id, { $set: updateObject });
    }
};
