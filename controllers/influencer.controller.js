const { EMPTY_AVATAR_URL } = require('../configs/config');
const { ErrorHandler, errorMassages } = require('../errors');
const {
    fileService,
    instagramService,
    influencerService,
    youtubeService,
    twitterService,
    tikTokService
} = require('../services');
const {
    CREATED,
    UPDATED
} = require('../constants/response.status.enum');
const {
    INFLUENCER_IS_CREATED,
    INFLUENCER_IS_UPDATED,
    FOLDER_NAME: { INFLUENCER },
    FOLDER_ASSETS: { INFLUENCER_DELETE }
} = require('../constants/constants');
const { SERVER_ERROR } = require('../constants/response.status.enum');

const getSocialData = async (body) => {
    try {
        if (body.youTube) {
            body.youtubeVideos = await youtubeService.getVideoData(body.youTube);
        }

        if (body.twitter) {
            body.tweets = await twitterService.getTweets(body.twitter);
        }

        if (body.tikTok) {
            body.tikTokVideos = await tikTokService.getTiktokData(body.tikTok);
        }
        return body;
    } catch (e) {
        return new ErrorHandler(SERVER_ERROR, errorMassages.SERVER_ERROR.message);
    }
};

module.exports = {
    createInfluencer: async (req, res, next) => {
        try {
            const {
                avatar,
                body
            } = req;

            if (!avatar) {
                req.body.avatar = EMPTY_AVATAR_URL;
            }

            if (avatar) {
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, INFLUENCER);
                req.body.avatar = cloudResponse.url;
            }

            if (body.instagram) {
                req.body.instagramPosts = await instagramService.getInstagramPostData(body.instagram);
            }

            await getSocialData(body);
            await influencerService.createInfluencer(body);

            res.status(CREATED)
                .json(INFLUENCER_IS_CREATED);
        } catch (error) {
            next(error);
        }
    },

    getInfluencerById: async (req, res) => {
        const influencer = await influencerService.findOneByParams({ _id: req.params.id });

        res.json(influencer);
    },

    getAllInfluencers: async (req, res, next) => {
        try {
            const influencers = await influencerService.getAllInfluencers(req.query);

            res.json(influencers);
        } catch (error) {
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

            if (!avatar) {
                req.body.avatar = findInfluencer.avatar;
            }

            if (avatar) {
                if (findInfluencer.avatar) {
                    await fileService.deleteFile(findInfluencer.avatar, INFLUENCER_DELETE);
                }
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, INFLUENCER);
                req.body.avatar = cloudResponse.url;
            }

            const instagramAccount = findInfluencer.socialProfiles.get('instagram');

            if (body.instagram && body.instagram !== instagramAccount.username) {
                if (findInfluencer.instagramPosts) {
                    for (const post of findInfluencer.instagramPosts) {
                        if (post.postImage) {
                            await fileService.deleteFile(post.postImage, INFLUENCER_DELETE);
                        }

                        if (post.postVideo) {
                            await fileService.deleteFile(post.postVideo.image, INFLUENCER_DELETE);
                        }

                        if (post.postCarousel) {
                            for (const image of post.postCarousel) {
                                await fileService.deleteFile(image, INFLUENCER_DELETE);
                            }
                        }
                    }
                }

                req.body.instagramPosts = await instagramService.getInstagramPostData(body.instagram);
            }

            await getSocialData(req.body);

            await influencerService.updateOne(id, { ...req.body });

            res.status(UPDATED)
                .json(INFLUENCER_IS_UPDATED);
        } catch (error) {
            next(error);
        }
    }
};
