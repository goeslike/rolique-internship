const { TwitterApi } = require('twitter-api-v2');
const { TWITTER_BEARER_TOKEN } = require('../configs/config');
const { COUNT_OF_POSTS } = require('../constants/constants');

const twitterClient = new TwitterApi(TWITTER_BEARER_TOKEN).readOnly;

const getTweets = async (username) => {
    const { data: { id } } = await twitterClient.v2.userByUsername(username);
    const response = await twitterClient.v2.userLikedTweets(id,
        {
            max_results: COUNT_OF_POSTS,
            expansions: 'attachments.media_keys',
            'tweet.fields': 'entities',
            'media.fields': [
                'preview_image_url',
                'url'
            ]
        });

    const {
        data,
        includes
    } = response._realData;
    const media = includes ? includes.media : [];
    const tweets = [];

    if (data) {
        data.map((tweet) => {
            if (tweet.attachments) {
                const include = media.find((item) => item.media_key === tweet.attachments.media_keys[0]);
                switch (include.type) {
                    case 'photo':
                        tweets.push({
                            id: tweet.id,
                            text: tweet.text,
                            photo: include.url,
                        });
                        break;
                    case 'video':
                        tweets.push({
                            id: tweet.id,
                            text: tweet.text,
                            video: include.preview_image_url,
                        });
                        break;
                    case 'animated_gif':
                        tweets.push({
                            id: tweet.id,
                            text: tweet.text,
                            gif: include.preview_image_url,
                        });
                        break;
                }
                return;
            }
            tweets.push({
                id: tweet.id,
                text: tweet.text,
            });
            return 'ok';
        });
    }
    return tweets;
};
module.exports = { getTweets };
