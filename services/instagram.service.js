const { instagramApi } = require('../helpers');

module.exports = {
    getImagesData: async (username) => {
        const accountImages = [];
        const ig = await instagramApi.getInstagramData();
        const client = await ig.user.searchExact(username);
        if (!client) {
            return accountImages;
        }
        const clientFeed = await ig.feed.user(
            client.pk
        );
        const page = await clientFeed.items();
        for (const post of page) {
            if (accountImages.length < 12) {
                if (post.carousel_media) {
                    for (const item of post.carousel_media) {
                        accountImages.push({ imgUrl: item.image_versions2.candidates[0].url });
                    }
                }
                if (post.image_versions2) {
                    accountImages.push({ imgUrl: post.image_versions2.candidates[0].url });
                }
            }
        }
        return accountImages;
    }
};
