const { User } = require('../dataBase');
const { queryBuilder } = require('../helpers');

module.exports = {
    createUser: (userObject) => User.create(userObject),
    findOneByParams: (params) => User.findOne(params),

    findAll: async (query = {}) => {
        if (query.name) {
            const { filterObject } = queryBuilder(query, 'user');
            const users = await User.find(filterObject.name).select('-password');
            console.log(users);
            return users;
        }

        const users = await User.find().select('-password');

        return users;
    },

    updateOne: async (id, updateObject) => {
        await User.findByIdAndUpdate(id, { $set: updateObject });
    }
};
