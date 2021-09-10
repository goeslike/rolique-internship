const { google } = require('googleapis');

const youtube = google.youtube('v3');
const { BASE_YOUTUBE_URL, YOUTUBE_API_KEY } = process.env;
const { COUNT_OF_POSTS } = require('../constants/constants');

module.exports = {
    getVideoData: async (username) => {
        const response = await youtube.search.list({
            key: YOUTUBE_API_KEY,
            part: 'snippet',
            q: username,
            maxResults: COUNT_OF_POSTS + 1,
        });

        const { items } = response.data;
        const videoData = [];
        items.map((item) => {
            if (item.id.videoId) {
                videoData.push({
                    title: item.snippet.title,
                    preview: item.snippet.thumbnails.medium.url,
                    videoUrl: `${BASE_YOUTUBE_URL}${item.id.videoId}`
                });
            }
        });
        return videoData;
    }
};
