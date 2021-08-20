const { TwitterApi } = require('twitter-api-v2');
const { TWITTER_BEARER_TOKEN } = require('../configs/config');

const twitterClient = new TwitterApi(TWITTER_BEARER_TOKEN).readOnly;

const getTweets = async (username) => {
    const { data: { id } } = await twitterClient.v2.userByUsername(username);
    const tweets = [];
    const response = await twitterClient.v2.userLikedTweets(id,
        {
            max_results: 12,
            expansions: 'attachments.media_keys',
            'tweet.fields': 'entities',
            'media.fields': 'url'
        });
    const { data } = response.data;

    data.map((tweet) => {
        //     let mediaKey;
        //     if (tweet.attachments !== undefined) {
        //      mediaKey = tweet.attachments.media_keys[0];
        //      return;
        // }
        if (tweet.entities === undefined || tweet.entities.urls === undefined) {
            tweets.push({
                id: tweet.id,
                text: tweet.text,
            });
            return;
        }

        tweets.push({
            id: tweet.id,
            text: tweet.text,
            retweeted: tweet.entities.urls[0].expanded_url
        });
        return tweet;
    });
    return tweets;
};
module.exports = { getTweets };
