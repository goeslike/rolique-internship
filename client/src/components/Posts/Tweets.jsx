import { Timeline } from 'react-twitter-widgets'

import { Posts } from './InstagramPosts.style';


const Tweets = ({ user }) => {

        return (
            <Posts>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: user
                    }}
                    options={{
                        width: '700',
                        // theme: 'dark',
                        tweetLimit: 12,
                        align: 'center'
                    }}
                />
            </Posts>
        );
    };

    export default Tweets;
