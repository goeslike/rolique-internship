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
            const influencer = await Influencer.find(filterObject.name).select('-password');
            return influencer;
        }

        const influencer = await Influencer.find().select('-password');

        return influencer;
    },

    findOneByParams: (params) => Influencer.findOne(params),
};
