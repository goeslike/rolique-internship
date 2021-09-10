const fetch = require('node-fetch');

const { instagramApi } = require('../helpers');
const { uploadBinaryFile } = require('./file.service');
const { COUNT_OF_POSTS, FOLDER_NAME: { INFLUENCER } } = require('../constants/constants');

module.exports = {
    getInstagramPostData: async (username) => {
        const accountPosts = [];
        const ig = await instagramApi.getInstagramData();
        const client = await ig.user.searchExact(username);
        if (!client) {
            return accountPosts;
        }
        const clientFeed = await ig.feed.user(
            client.pk
        );
        const page = await clientFeed.items();

        for (const post of page) {
            if (accountPosts.length <= COUNT_OF_POSTS) {
                if (post.carousel_media) {
                    const carouselMedia = [];
                    for (const item of post.carousel_media) {
                        const promise = fetch(item.image_versions2.candidates[0].url)
                            .then((data) => data.blob())
                            .then((image) => uploadBinaryFile(image, INFLUENCER));
                        const photo = await promise;
                        carouselMedia.push(photo.url);
                    }
                    accountPosts.push({ postCarousel: carouselMedia });
                }

                if (post.image_versions2 && !post.video_versions) {
                    const promise = fetch(post.image_versions2.candidates[0].url)
                        .then((data) => data.blob())
                        .then((image) => uploadBinaryFile(image, INFLUENCER));
                    const photo = await promise;
                    accountPosts.push({ postImage: photo.url });
                }

                if (post.video_versions) {
                    const promise = fetch(post.image_versions2.candidates[0].url)
                        .then((data) => data.blob())
                        .then((image) => uploadBinaryFile(image, INFLUENCER));
                    const photo = await promise;
                    const videoData = {
                        image: photo.url,
                        video: post.video_versions[0].url
                    };
                    accountPosts.push({ postVideo: videoData });
                }
            }
        }
        return accountPosts;
    }
};
