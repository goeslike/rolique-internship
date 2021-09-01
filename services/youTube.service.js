const { google } = require('googleapis');
const { BASE_YOUTUBE_URL } = require('../configs/config');
const { YOUTUBE_API_KEY } = require('../configs/config');

const youtube = google.youtube('v3');

module.exports = {
    getVideoData: async (username) => {
        const response = await youtube.search.list({
            key: YOUTUBE_API_KEY,
            part: 'snippet',
            q: username,
            maxResults: 13,
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
