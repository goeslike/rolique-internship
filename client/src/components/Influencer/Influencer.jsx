import React from 'react';
import { useSelector } from 'react-redux';
import InfluencerHeader from '../Header/InfluencerHeader';

import {
    InfluencerAvatar,
    InfluencerContainer,
    InfluencerData,
    InfluencerInfo,
    InfluencerName,
    InfluencerPost,
    InfluencerPostImg,
    InfluencerPosts,
    InfluencerWrapper
} from './Influencer.style';

const Influencer = () => {
    const influencer = useSelector(({ influencersReducer: { influencer } }) => influencer);
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
                    </div>
                </InfluencerInfo>

                <InfluencerPosts>
                    {influencer.instagramPosts.map(post => {
                        if (post.postVideo) {
                            return (
                                <InfluencerPost>
                                    <InfluencerPostImg src={post.postVideo.image}/>
                                    <a href={post.postVideo.video}>video</a>
                                    {/*чи можна зробити лінку на відео символом трикутничка (значок відео) поверх картинки? І при кліку на символ
                                    буде спливати модальне вікно в якому буде відтворюватись відео?*/}
                                </InfluencerPost>
                            );
                        }
                        if (post.postImage) {
                            return (
                                <InfluencerPost>
                                    <InfluencerPostImg src={post.postImage}/>
                                </InfluencerPost>
                            );
                        }
                        if (post.postCarousel) {
                            return (
                                <InfluencerPost>
                                    <InfluencerPostImg src={post.postCarousel[0]}/>
                                    <p>carousel</p>
                                    {/*чи можна зробити зночок каруселі поверх фото і при настиску спливатиме модальне вікно
                                    типу слайдер де можна переглянути фотки з каруселі?*/}
                                </InfluencerPost>
                            );
                        }
                    })}
                </InfluencerPosts>
            </InfluencerContainer>
        </InfluencerWrapper>
    );
};

export default Influencer;
