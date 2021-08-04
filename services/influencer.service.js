const { Influencer } = require('../dataBase');
const { queryBuilder } = require('../helpers');

module.exports = {
    createInfluencer: async (influencer) => {
        const newInfluencer = await Influencer.create(influencer);
        if (influencer.instagram) {
            await newInfluencer.socialProfiles.set(
                'instagram', { username: influencer.instagram, followers: influencer.instagramFollowers }
            );
            await newInfluencer.save();
        }

        if (influencer.facebook) {
            await newInfluencer.socialProfiles.set(
                'facebook', { username: influencer.facebook, followers: influencer.facebookFollowers }
            );
            await newInfluencer.save();
        }

        return newInfluencer;
    },
    getAllInfluencers: async (query = {}) => {
        if (query.name) {
            const { filterObject } = queryBuilder(query, 'influencer');
            const influencers = await Influencer.find(filterObject.name).select('-password');
            const insta = await Influencer.aggregate(filterObject.pipeline, (() => {}));
            if (insta) {
                influencers.push(insta[0].doc);
            }
            return influencers;
        }

        const influencer = await Influencer.find().select('-password');

        return influencer;
    },

    findOneByParams: (params) => Influencer.findOne(params),

    isInfluencerPresent: (param) => Influencer.exists(param),
};
