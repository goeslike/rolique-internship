const fetch = require('node-fetch');

const { instagramApi } = require('../helpers');

module.exports = {
    getImagesData: async (username) => {
        const accountImagePromises = [];
        const ig = await instagramApi.getInstagramData();
        const client = await ig.user.searchExact(username);
        if (!client) {
            return accountImagePromises;
        }
        const clientFeed = await ig.feed.user(
            client.pk
        );
        const page = await clientFeed.items();
        for (const post of page) {
            if (accountImagePromises.length < 12) {
                if (post.carousel_media) {
                    for (const item of post.carousel_media) {
                        accountImagePromises.push({ imageUrl: item.image_versions2.candidates[0].url });
                    }
                }
                if (post.image_versions2) {
                    accountImagePromises.push({ imageUrl: post.image_versions2.candidates[0].url });
                }
            }
        }
        const arrayPromiseFile = [];

        for (const promise of accountImagePromises) {
            const filePromise = fetch(promise.imageUrl)
                .then((data) => data.blob());
            arrayPromiseFile.push(filePromise);
        }

        await Promise.all(arrayPromiseFile);

        return arrayPromiseFile;
    }
};
