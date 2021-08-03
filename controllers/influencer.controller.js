const {
    instagramService,
    fileService,
    influencerService
} = require('../services');
const { CREATED } = require('../constants/response.status.enum');
const { FOLDER_NAME: { INFLUENCER } } = require('../constants/constants');

module.exports = {
    createInfluencer: async (req, res, next) => {
        try {
            const {
                avatar,
                body
            } = req;

            if (avatar) {
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, INFLUENCER);
                req.body.avatar = cloudResponse.url;
            }

            if (body.instagram) {
                const images = await instagramService.getImagesData(body.instagram);

                const photos = [];
                for (const image of images) {
                    const photo = await fileService.uploadBinaryFile(image, `${INFLUENCER}${body.instagram}`);
                    photos.push({ photo: photo.url });
                }
                req.body.instagramPhotos = photos;
            }

            await influencerService.createInfluencer(req.body);

            res.status(CREATED)
                .json(`Influencer ${body.firstName} ${body.lastName} was created`);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
};
