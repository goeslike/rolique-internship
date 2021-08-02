const {
    instagramService,
    fileService,
    influencerService
} = require('../services');
const { constants: { FOLDER_NAME: { INFLUENCER } }, statusCode: { CREATED } } = require('../constants');

module.exports = {
    createInfluencer: async (req, res, next) => {
        try {
            const {
                body, files: { avatar }
            } = req;

            if (avatar) {
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, INFLUENCER);
                req.body = {
                    ...body,
                    avatar: cloudResponse.url
                };
            }

            const influencer = await influencerService.createInfluencer(body);
            console.log(influencer.socialProfiles.get('instagram'));

            if (body.instagram) {
                const images = await instagramService.getImagesData(body.instagram);
                res.json(images);
            }

            res.status(CREATED).json(`Influencer ${body.firstName} ${body.lastName} was created`);
        } catch (error) {
            next(error);
        }
    }
};
