const {
    instagramService,
    fileService,
    influencerService
} = require('../services');
const { CREATED } = require('../constants/response.status.enum');
const {
    FOLDER_NAME: { INFLUENCER },
    FOLDER_ASSETS: { INFLUENCER_DELETE }
} = require('../constants/constants');
const { UPDATED } = require('../constants/response.status.enum');

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
                    const photo = await fileService.uploadBinaryFile(image, INFLUENCER);
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
    },

    updateInfluencer: async (req, res, next) => {
        try {
            const {
                params: { id },
                body,
                avatar
            } = req;

            const findInfluencer = await influencerService.findOneByParams({ _id: id });

            if (avatar) {
                if (findInfluencer.avatar) {
                    await fileService.deleteFile(findInfluencer.avatar, INFLUENCER_DELETE);
                }
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, INFLUENCER);
                await influencerService.updateOne(id, { avatar: cloudResponse.url });
            }

            if (body.instagram) {
                if (findInfluencer.instagramPhotos) {
                    const array = findInfluencer.instagramPhotos;

                    for (const item of array) {
                        await fileService.deleteFile(item.photo, INFLUENCER_DELETE);
                    }

                    const images = await instagramService.getImagesData(body.instagram);

                    const photos = [];
                    for (const image of images) {
                        const photo = await fileService.uploadBinaryFile(image, INFLUENCER_DELETE);
                        photos.push({ photo: photo.url });
                    }
                    req.body.instagramPhotos = photos;
                }
            }

            await influencerService.updateOne(id, { ...req.body });

            res.status(UPDATED)
                .json(`influencer id:${id} is updated`);
        } catch (error) {
            next(error);
        }
    }
};
