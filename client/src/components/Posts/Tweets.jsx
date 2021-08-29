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
                        tweetLimit: 12,
                        align: 'center'
                    }}
                />
            </Posts>
        );
    };

    export default Tweets;

    // to change embedded timeline to embedded tweets it is necessary:

// in src>components>Twitter.jsx>Twitter() :
// …
// port { Tweet } from 'react-twitter-widgets';
//
// const Twitter = ({tweets}) => {
//     return (
//         tweets.map((tweet) =>
//             <Tweet tweetId={tweet.id} options={{ align: "center" }} />
//         )
//     );
// };
// …


// in src>components>Influencer>Influencer.jsx>Influencer():
// …
// <CSSTransition in={!!showTwitter} classNames={'alert'} timeout={200} unmountOnExit>
//     <Twitter tweets={influencer.tweets}/>
// </CSSTransition>
// …

