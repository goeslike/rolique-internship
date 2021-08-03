const fetch = require('node-fetch');

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
                        const filePromise = fetch(item.image_versions2.candidates[0].url)
                            .then((data) => data.blob());
                        const file = await filePromise;
                        accountImages.push({ image: file });
                    }
                }
                if (post.image_versions2) {
                    const filePromise = fetch(post.image_versions2.candidates[0].url)
                        .then((data) => data.blob());
                    const file = await filePromise;
                    accountImages.push({ image: file });
                }
            }
        }
        return accountImages;
    }
};
