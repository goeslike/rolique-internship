const {
    instagramService,
    fileService,
    influencerService
} = require('../services');
const { CREATED, UPDATED } = require('../constants/response.status.enum');
const {
    INFLUENCER_IS_CREATED,
    INFLUENCER_IS_UPDATED,
    FOLDER_NAME: { INFLUENCER },
    FOLDER_ASSETS: { INFLUENCER_DELETE }
} = require('../constants/constants');

module.exports = {
    createInfluencer: async (req, res, next) => {
        try {
            const {
                avatar,
                body
            } = req;

            if (!avatar) {
                req.body.avatar = undefined;
            }

            if (avatar) {
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, INFLUENCER);
                req.body.avatar = cloudResponse.url;
            }
            if (body.instagram) {
                const postsData = await instagramService.getInstagramPostData(body.instagram);

                const postsUrl = [];
                for (const post of postsData) {
                    if (post.postCarousel) {
                        const carousel = [];
                        for (const image of post.postCarousel) {
                            const photo = await fileService.uploadBinaryFile(image, INFLUENCER);
                            carousel.push(photo.url);
                        }
                        postsUrl.push({ postCarousel: carousel });
                    }

                    if (post.postVideo) {
                        const image = await fileService.uploadBinaryFile(post.postVideo.imageVersion, INFLUENCER);
                        const data = {
                            image: image.url,
                            video: post.postVideo.videoUrl
                        };
                        postsUrl.push({ postVideo: data });
                    }

                    if (post.postImage) {
                        const photo = await fileService.uploadBinaryFile(post.postImage, INFLUENCER);
                        postsUrl.push({ postImage: photo.url });
                    }
                }
                req.body.instagramPosts = postsUrl;
            }
            await influencerService.createInfluencer(req.body);

            res.status(CREATED)
                .json(INFLUENCER_IS_CREATED);
        } catch (error) {
            next(error);
        }
    },

    getInfluencerById: (req, res) => {
        const { influencer } = req;

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

    // update in process
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
                .json(INFLUENCER_IS_UPDATED);
        } catch (error) {
            next(error);
        }
    }
};
