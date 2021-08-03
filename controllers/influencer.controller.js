const {
    instagramService,
    fileService,
    influencerService
} = require('../services');
const { FOLDER_NAME: { INFLUENCER } } = require('../constants/constants');
const { CREATED } = require('../constants/response.status.enum');

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
                // eslint-disable-next-line no-unused-vars
                const images = await instagramService.getImagesData(body.instagram);
                // req.body = {
                //     ...body,
                //     instagramPhotos: images
                // };
            }

            await influencerService.createInfluencer(req.body);

            res.status(CREATED).json(`Influencer ${body.firstName} ${body.lastName} was created `);
        } catch (error) {
            next(error);
        }
    },

    getInfluencerById: async (req, res, next) => {
        try {
            const { id } = req.params;

            const influencer = await influencerService.findOneByParams({ _id: id });

            res.json(influencer);
        } catch (error) {
            next(error);
        }
    },

    getAllInfluencers: async (req, res, next) => {
        try {
            const influencers = await influencerService.getAllInfluencers(req.query);

            res.json(influencers);
        } catch (error) {
            next(error);
        }
    }
};
