const fetch = require('node-fetch');

const { instagramApi } = require('../helpers');

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
            if (accountPosts.length < 6) {
                if (post.carousel_media) {
                    const carouselMedia = [];
                    for (const item of post.carousel_media) {
                        const promise = fetch(item.image_versions2.candidates[0].url)
                            .then((data) => data.blob());
                        const image = await promise;
                        carouselMedia.push(image);
                    }
                    accountPosts.push({ postCarousel: carouselMedia });
                }

                if (post.image_versions2 && !post.video_versions) {
                    const promise = fetch(post.image_versions2.candidates[0].url)
                        .then((data) => data.blob());
                    const image = await promise;
                    accountPosts.push({ postImage: image });
                }

                if (post.video_versions) {
                    const promise = fetch(post.image_versions2.candidates[0].url)
                        .then((data) => data.blob());
                    const image = await promise;
                    const videoData = {
                        imageVersion: image,
                        videoUrl: post.video_versions[0].url
                    };
                    accountPosts.push({ postVideo: videoData });
                }
            }
        }
        return accountPosts;
    }
};
