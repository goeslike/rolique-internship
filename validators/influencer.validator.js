const Joi = require('joi');
const {
    INSTAGRAM,
    INSTAGRAM_FOLLOWERS,
    TIKTOK,
    TIKTOK_FOLLOWERS,
    TWITTER,
    TWITTER_FOLLOWERS,
    YOUTUBE,
    YOUTUBE_FOLLOWERS
} = require('../constants/constants');

module.exports = {
    createInfluencer: Joi.object()
        .keys({
            avatar: Joi.any(),
            firstName: Joi.string()
                .required()
                .min(3)
                .max(25),
            lastName: Joi.string()
                .required()
                .min(3)
                .max(25),
            birthdate: Joi.date(),
            profession: Joi.string()
                .required(),
            instagram: Joi.string()
                .min(3)
                .max(25),
            instagramFollowers: Joi.string()
                .empty(''),
            youTube: Joi.string(),
            youTubeFollowers: Joi.string(),
            facebook: Joi.string()
                .min(3)
                .max(25),
            facebookFollowers: Joi.string(),
            tikTok: Joi.string()
                .min(3)
                .max(25),
            tikTokFollowers: Joi.string(),
            twitter: Joi.string()
                .min(3)
                .max(25),
            twitterFollowers: Joi.string(),
            blog: Joi.string()
                .min(3)
                .max(25),
            blogFollowers: Joi.string(),
        })
        .and(INSTAGRAM, INSTAGRAM_FOLLOWERS)
        .and(TIKTOK, TIKTOK_FOLLOWERS)
        .and(TWITTER, TWITTER_FOLLOWERS)
        .and(YOUTUBE, YOUTUBE_FOLLOWERS),
    updateInfluencer: Joi.object()
        .keys({
            avatar: Joi.any(),
            firstName: Joi.string()
                .min(3)
                .max(25),
            lastName: Joi.string()
                .min(3)
                .max(25),
            birthdate: Joi.date(),
            profession: Joi.string(),
            instagram: Joi.string()
                .min(3)
                .max(25),
            instagramFollowers: Joi.string(),
            youTube: Joi.string()
                .min(3)
                .max(25),
            youTubeFollowers: Joi.string(),
            facebook: Joi.string()
                .min(3)
                .max(25),
            facebookFollowers: Joi.string(),
            tikTok: Joi.string()
                .min(3)
                .max(25),
            tikTokFollowers: Joi.string(),
            twitter: Joi.string()
                .min(3)
                .max(25),
            twitterFollowers: Joi.string(),
            blog: Joi.string()
                .min(3)
                .max(25),
            blogFollowers: Joi.string(),
        })
};
