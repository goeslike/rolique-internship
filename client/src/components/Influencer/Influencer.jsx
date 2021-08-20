import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import InfluencerHeader from '../Header/InfluencerHeader';
import Modal from '../Modal/Modal';
import InstagramPosts from '../Posts/InstagramPosts';

import {
    InfluencerAvatar,
    InfluencerContainer,
    InfluencerInfo,
    InfluencerName,
    InfluencerWrapper,
    InfluencerData
} from './Influencer.style';

import InfluencerSocial from './InfluencerSocial';

const Influencer = () => {
    const influencer = useSelector(({influencersReducer : {influencer}}) => influencer);

    return (
        <InfluencerWrapper>
            <InfluencerHeader title={influencer.firstName + ' ' + influencer.lastName} id={influencer.id}/>

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

                <InstagramPosts posts={influencer.instagramPosts}/>

            </InfluencerContainer>
        </InfluencerWrapper>
    );
};

export default Influencer;
