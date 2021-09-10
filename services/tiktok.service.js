const tikTokScrapper = require('tiktok-scraper');

const { SESSION_LIST } = process.env;
const { COUNT_OF_POSTS } = require('../constants/constants');

module.exports = {
    getTiktokData: async (username) => {
        try {
            const posts = await tikTokScrapper.user(username, {
                number: COUNT_OF_POSTS,
                sessionList: [SESSION_LIST]
            });
            const tiktokData = posts.collector;
            const videoData = [];

            tiktokData.forEach((item) => {
                videoData.push({
                    video: item.videoUrl,
                    image: item.covers.origin
                });
            });
            return videoData;
        } catch (error) {
            console.log(error);
        }
    }
};
