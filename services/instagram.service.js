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
        const binaryInstagramPhotos = [];

        for (const promise of accountImagePromises) {
            const filePromise = fetch(promise.imageUrl)
                .then((data) => data.blob());
            binaryInstagramPhotos.push(filePromise);
        }

        await Promise.all(binaryInstagramPhotos);
        // const array = [];
        // for (const binaryInstagramPhoto of binaryInstagramPhotos) {
        //     const item = await binaryInstagramPhoto
        //     array.push(item)
        // }

        return binaryInstagramPhotos;
        // return array
    }
};
