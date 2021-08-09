const {
    ErrorHandler,
    errorMassages
} = require('../errors');
const { influencerService } = require('../services');
const { statusCode } = require('../constants');

module.exports = {
    checkIsInfluencerExists: async (req, res, next) => {
        try {
            const influencer = await influencerService.findOneByParams({ _id: req.params.id });

            if (!influencer) {
                return next(new ErrorHandler(statusCode.BAD_REQUEST, errorMassages.RECORD_NOT_FOUND));
            }

            req.influencer = influencer;
            next();
        } catch (e) {
            next(e);
        }
    }
};
