const dayjs = require('dayjs');
const { O_Auth } = require('../dataBase');

module.exports = async () => {
    const tokens = await O_Auth.find();
    const set = new Set();

    const reduce = tokens.reduce((acc, value) => {
        if (value <= dayjs(new Date()).subtract(30, 'days').format()) {
            set.add(value._id);
            return acc;
        }

        if (acc[value.user]) {
            if (acc[value.user] >= value.updatedAt) {
                set.add(value._id);
                return acc;
            }
            acc[value.user] = value.updatedAt;
            return acc;
        }

        acc[value.user] = value.updatedAt;
        return acc;
    }, {});

    tokens.reduce((acc, value) => {
        if (acc[value.user] && value.updatedAt !== acc[value.user]) {
            set.add(value._id);
            return acc;
        }
        return acc;
    }, reduce);

    for (const value of set) {
        await O_Auth.findByIdAndDelete(value);
    }
};
