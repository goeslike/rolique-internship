const { User } = require('../dataBase');
// const { queryBuilder } = require('../helpers');

module.exports = {
    createUser: (userObject) => User.create(userObject),
    findOneByParams: (params) => User.findById(params),

    findAll: async (query = {}) => {
        // const { filterObject, sort } = queryBuilder(query, 'user');
        // const users = await User.find(filterObject).sort(sort);
        await User.ensureIndexes({ firstname: 'text', lastname: 'text' });

        if (query.name) {
            const users = await User.find({ $text: { $search: query.name } }, (() => {}));
            return users;
        }

        const users = await User.find();

        return users;
    },

    updateOne: async (id, updateObject) => {
        await User.findByIdAndUpdate(id, { $set: updateObject });
    }
};
