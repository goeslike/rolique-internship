const { authService } = require('../services');
const { O_Auth } = require('../dataBase');

module.exports = async () => {
    const tokens = await O_Auth.find().populate('user');

    for (const token of tokens) {
        if (token.user === null) {
            await authService.removeTokens(token._id); // for await
            console.log('remove');
        }
    }
};
