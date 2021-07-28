const dayjs = require('dayjs');
const { authService } = require('../services');

module.exports = async () => {
    const oldTokens = await authService.getTokensByParams({
        updatedAt: { $lte: dayjs(new Date()).subtract(1, 'minute').format() }
    });

    console.log(oldTokens.length);
    // console.log(oldTokens);

    // let mapa = new Map();
    const reduce = oldTokens.reduce((acc, value, index, array) => {
        array.forEach((tokens) => {
            if (tokens.user === value.user) {
                acc[value.user] = index;
                // mapa.add(value.id);
            }
        });
        return acc;
    }, {});

    console.log(reduce);
};
