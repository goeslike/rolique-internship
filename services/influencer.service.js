const { Influencer } = require('../dataBase');
const { socialProfilesSave } = require('../helpers');

module.exports = {
    createInfluencer: async (influencer) => {
        const newInfluencer = await Influencer.create(influencer);
        await socialProfilesSave(influencer, newInfluencer);

        return newInfluencer;
    },

    findOneByParams: (params) => Influencer.findOne(params),

    updateOne: async (id, updateObject) => {
        const influencer = await Influencer.findByIdAndUpdate(id, { $set: updateObject });

        await socialProfilesSave(updateObject, influencer);
        // if (updateObject.instagram) {
        //     await influencer.socialProfiles.set(
        //         'instagram', { username: updateObject.instagram, followers: updateObject.instagramFollowers }
        //     );
        //     await influencer.save();
        // }
        //
        // if (updateObject.facebook) {
        //     await influencer.socialProfiles.set(
        //         'facebook', { username: updateObject.facebook, followers: updateObject.facebookFollowers }
        //     );
        //     await influencer.save();
        // }
    }
};
