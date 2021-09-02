import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import InfluencerHeader from '../Header/InfluencerHeader';

import TikTok from '../InfluencerContent/TikTok';
import Twitter from '../InfluencerContent/Twitter';
import YouTube from '../InfluencerContent/YouTube';
import Instagram from '../InfluencerContent/Instagram';

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

    const birthdate = [...influencer.birthdate];
    birthdate.slice(9, 23);

    const [showInstagram, setShowInstagram] = useState(true);
    const [showYoutube, setShowYoutube] = useState(false);
    const [showTiktok, setShowTiktok] = useState(false);
    const [showTwitter, setShowTwitter] = useState(false);

    useEffect(() => {
        if (!influencer.socialProfiles.instagram && influencer.socialProfiles.tikTok) {
            setShowTiktok(true);
            return;
        }

        if (!influencer.socialProfiles.instagram && influencer.socialProfiles.youTube) {
            setShowYoutube(true);
            return;
        }

        if (!influencer.socialProfiles.instagram && !influencer.socialProfiles.twitter) {
            setShowTwitter(true);
            return;
        }
    }, [
        influencer.socialProfiles.instagram,
        influencer.socialProfiles.tikTok,
        influencer.socialProfiles.youTube,
        influencer.socialProfiles.twitter
    ]);

    return (
        <InfluencerWrapper>
            <InfluencerHeader title={influencer.firstName + ' ' + influencer.lastName} id={influencer.id}/>

            <InfluencerContainer>
                <InfluencerInfo>
                    {influencer.avatar && <InfluencerAvatar src={influencer.avatar} alt={'influencer avatar'}/>}

                    <div>
                        <InfluencerName>{influencer.firstName + ' ' + influencer.lastName}</InfluencerName>
                        <InfluencerData>
                            <div>Birthday:</div>
                            <div>{birthdate.slice(0, 10)}</div>
                        </InfluencerData>

                        <InfluencerData>
                            <div>Occupation:</div>
                            <div>{influencer.profession}</div>
                        </InfluencerData>

                        <InfluencerSocial
                            socialMedia={influencer.socialProfiles}
                            setInstagram={setShowInstagram}
                            setYoutube={setShowYoutube}
                            setTiktok={setShowTiktok}
                            setTwitter={setShowTwitter}
                        />
                    </div>
                </InfluencerInfo>

                <CSSTransition in={showInstagram} classNames={'alert'} timeout={200} unmountOnExit>
                    <Instagram posts={influencer.instagramPosts}/>
                </CSSTransition>

                <CSSTransition in={showYoutube} classNames={'alert'} timeout={200} unmountOnExit>
                    <YouTube videos={influencer.youtubeVideos}/>
                </CSSTransition>

                <CSSTransition in={showTiktok} classNames={'alert'} timeout={200} unmountOnExit>
                    <TikTok videos={influencer.tikTokVideos}/>
                </CSSTransition>

                <CSSTransition in={showTwitter} classNames={'alert'} timeout={200} unmountOnExit>
                    <Twitter username={influencer.socialProfiles?.twitter?.username}/>
                </CSSTransition>

            </InfluencerContainer>
        </InfluencerWrapper>
    );
};

export default Influencer;
