const { ErrorHandler, errorMassages } = require('../errors');
const { constants, statusCode } = require('../constants');
const { O_Auth } = require('../dataBase');
const { jwtVerifyHelper } = require('../helpers');

module.exports = {
    checkAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get(constants.AUTHORIZATION);

            if (!access_token) {
                throw new ErrorHandler(statusCode.BAD_REQUEST, errorMassages.TOKEN_IS_REQUIRED);
            }

            await jwtVerifyHelper.jwtVerify('access', access_token);

            const tokens = await O_Auth.findOne({ access_token }).populate('user');

            if (!tokens) {
                throw new ErrorHandler(statusCode.BAD_REQUEST, errorMassages.NOT_VALID_TOKEN);
            }

            req.infoTokens = tokens._id;
            req.userId = tokens.user;
            next();
        } catch (e) {
            next(e);
        }
    },
    checkRefreshToken: async (req, res, next) => {
        try {
            const refresh_token = req.get(constants.AUTHORIZATION);

            if (!refresh_token) {
                throw new ErrorHandler(statusCode.BAD_REQUEST, errorMassages.TOKEN_IS_REQUIRED);
            }

            await jwtVerifyHelper.jwtVerify('refresh', refresh_token);

            const tokens = await O_Auth.findOne({ refresh_token });

            if (!tokens) {
                throw new ErrorHandler(statusCode.BAD_REQUEST, errorMassages.NOT_VALID_REFRESH_TOKEN);
            }

            req.tokenInfo = tokens;
            next();
        } catch (e) {
            next(e);
        }
    }
};
