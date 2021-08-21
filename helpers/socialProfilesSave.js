module.exports = async (createObject, influencer) => {
    if (createObject.instagram) {
        await influencer.socialProfiles.set(
            'instagram', { username: createObject.instagram, followers: createObject.instagramFollowers }
        );
        await influencer.save();
    }

    if (createObject.facebook) {
        await influencer.socialProfiles.set(
            'facebook', { username: createObject.facebook, followers: createObject.facebookFollowers }
        );
        await influencer.save();
    }

    if (createObject.youTube) {
        await influencer.socialProfiles.set(
            'youTube', { username: createObject.youTube, followers: createObject.youTubeFollowers }
        );
        await influencer.save();
    }
    if (createObject.tikTok) {
        await influencer.socialProfiles.set(
            'tikTok', { username: createObject.tikTok, followers: createObject.tikTokFollowers }
        );
        await influencer.save();
    }
};
