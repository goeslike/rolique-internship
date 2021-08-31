import React from 'react';

import { Tweets } from './Twitter.style';

import { Timeline } from 'react-twitter-widgets';

const Twitter = ({username}) => {
    return (
        <Tweets>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: username
                }}

                options={{
                    width: '700',
                    tweetLimit: 8,
                }}
            />
        </Tweets>
    );
};

export default Twitter;
