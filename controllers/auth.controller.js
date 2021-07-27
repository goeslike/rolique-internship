const { authService, userService } = require('../services');

module.exports = {
    authUser: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const tokens = await authService.authUser(email, password);
            const currentUser = await userService.findOneByParams({ email });

            console.log(currentUser);
            res.status(200).json({ tokens, currentUser: currentUser.role });
        } catch (e) {
            next(e);
        }
    },
    refreshToken: async (req, res, next) => {
        try {
            const { user, _id } = req.tokenInfo;
            const tokens = await authService.refreshToken(user, _id);
            res.json(tokens);
        } catch (e) {
            next(e);
        }
    }
};
