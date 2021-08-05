const { Influencer } = require('../dataBase');
const { socialProfilesSave, queryBuilder } = require('../helpers');

module.exports = {
    createInfluencer: async (influencer) => {
        const newInfluencer = await Influencer.create(influencer);
        await socialProfilesSave(influencer, newInfluencer);

        return newInfluencer;
    },

    getAllInfluencers: async (query = {}) => {
        if (query.name) {
            const { filterObject } = queryBuilder(query, 'influencer');
            const influencers = await Influencer.find(filterObject.name).select('-password');
            const insta = await Influencer.aggregate(filterObject.pipeline, (() => {
            }));
            if (insta.length) {
                insta.forEach((value) => {
                    influencers.push(value);
                });
            }
            return influencers;
        }

        const influencers = await Influencer.find().select('-password');

        return influencers;
    },

    findOneByParams: (params) => Influencer.findOne(params),

    isInfluencerPresent: (param) => Influencer.exists(param),

    updateOne: async (id, updateObject) => {
        const influencer = await Influencer.findByIdAndUpdate(id, { $set: updateObject });

        await socialProfilesSave(updateObject, influencer);
    },

};
