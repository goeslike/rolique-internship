import React from 'react';

import {
    Tweets,
    Tweet,
    Avatar,
    Name,
    UserName,
    PostText
} from './Twitter.style';

const Twitter = ({tweets, avatar, username, lastName, firstName}) => {
    return (
        <Tweets>
            {tweets.map(tweet => {
                return (
                    <Tweet key={tweet.id}>
                        <div>
                            <Avatar src={avatar} alt={'avatar'}/>
                        </div>

                        <div>
                            <Name>{firstName + ' ' + lastName}</Name>
                            <UserName>@{username}</UserName>
                            <PostText>
                                {tweet.text}
                            </PostText>
                            {tweet.media &&
                                <img src={tweet.media.url} alt={'twitter-avatar'}/>
                            }
                        </div>
                    </Tweet>
                );
            })}
        </Tweets>
    );
};

export default Twitter;
