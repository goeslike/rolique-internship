import React from 'react';
import { useSelector } from 'react-redux';
import InfluencerHeader from '../Header/InfluencerHeader';

import {
    InfluencerAvatar,
    InfluencerContainer,
    InfluencerInfo,
    InfluencerName,
    InfluencerWrapper,
    InfluencerData,
    InfluencerPosts,
    InfluencerPost,
    InfluencerPostImg
} from './Influencer.style';

import InfluencerSocial from './InfluencerSocial';

const Influencer = () => {
    const influencer = useSelector(({influencersReducer : {influencer}}) => influencer);
    console.log(influencer);

    return (
        <InfluencerWrapper>
            <InfluencerHeader title={influencer.firstName + ' ' + influencer.lastName}/>

            <InfluencerContainer>
                <InfluencerInfo>
                    <InfluencerAvatar src={influencer.avatar} alt={'influencer avatar'}/>

                    <div>
                        <InfluencerName>{influencer.firstName + ' ' + influencer.lastName}</InfluencerName>
                        <InfluencerData>
                            <div>Birthday:</div>
                            <div>{influencer.birthdate}</div>
                        </InfluencerData>

                        <InfluencerData>
                            <div>Occupation:</div>
                            <div>{influencer.profession}</div>
                        </InfluencerData>

                        <InfluencerSocial socialMedia={influencer.socialProfiles}/>
                    </div>
                </InfluencerInfo>

                <InfluencerPosts>
                    {influencer.instagramPhotos.map(post => {
                        return (
                            <InfluencerPost key={post.photo}>
                                <InfluencerPostImg src={post.photo}/>
                            </InfluencerPost>
                        )
                    })}
                </InfluencerPosts>
            </InfluencerContainer>
        </InfluencerWrapper>
    );
};

export default Influencer;
