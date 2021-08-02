const { Influencer } = require('../dataBase');

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

};
