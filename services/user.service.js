const { User } = require('../dataBase');
const { queryBuilder } = require('../helpers');

module.exports = {
    createUser: (userObject) => User.create(userObject),
    findOneByParams: (params) => User.findOne(params),

    findAll: async (query = {}) => {
        const { filterObject, sort } = queryBuilder(query, 'user');

        const users = await User.find(filterObject).sort(sort);
        return users;
    },

    updateOne: async (id, updateObject) => {
        await User.findByIdAndUpdate(id, { $set: updateObject });
    }
};
