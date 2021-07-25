const { User } = require('../dataBase');

module.exports = {
    findOneByParams: (params) => User.findOne(params),
    findAll: () => User.find(),
    updateOne: async (id, updateObject) => {
        await User.findByIdAndUpdate(id, { $set: updateObject });
    }
};
