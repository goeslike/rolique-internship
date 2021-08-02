const {
    instagramService,
    fileService
} = require('../services');
const { constants: { FOLDER_NAME: { INFLUENCER } } } = require('../constants');

module.exports = {
    createInfluencer: async (req, res, next) => {
        try {
            const {
                avatar,
                body: { social_profiles }
            } = req;

            if (avatar) {
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, INFLUENCER);
                req.body = {
                    ...req.body,
                    avatar: cloudResponse.url
                };
            }

            const instagramAccount = social_profiles.find((profile) => profile.social_profile_type === 'instagram');
            if (instagramAccount) {
                const images = await instagramService.getImagesData(instagramAccount.social_profile);
                res.json(images);
            }
        } catch (error) {
            next(error);
        }
    }
};
