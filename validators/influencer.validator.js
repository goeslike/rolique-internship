const Joi = require('joi');

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
                // .when('instagram', {
                //     is: true,
                //     then: Joi.required()
                // }),
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
        }),
        // .and('instagram', 'instagramFollowers')
        // .and('facebook', 'facebookFollowers'),
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
