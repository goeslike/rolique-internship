import React from 'react';

import instagramIcon from '../../assets/influencer-social/instagram.png';
import tiktokIcon from '../../assets/influencer-social/tiktik.png';
import facebookIcon from '../../assets/influencer-social/facebook.png';
import youtubeIcon from '../../assets/influencer-social/youtube.png';
import twitterIcon from '../../assets/influencer-social/twitter.png';

import {
    SocialMediaList,
    InfluencerData,
    InfluencerName,
    InfluencerFollowers,
    Instagram,
    TikTok,
    Facebook,
    YouTube,
    Twitter
} from './InfluencerSocial.style';

const InfluencerSocial = ({socialMedia, setInstagram, setYoutube, setTiktok, setTwitter}) => {
    return (
        <SocialMediaList>
            {socialMedia.instagram &&
                    <Instagram onClick={() => {
                        setInstagram(true)
                        setYoutube(false)
                        setTiktok(false)
                        setTwitter(false)
                    }}>
                        <img src={instagramIcon} alt=""/>
                        <InfluencerData>
                            <InfluencerName>{socialMedia.instagram.username}</InfluencerName>
                            <InfluencerFollowers>{socialMedia.instagram.followers}</InfluencerFollowers>
                        </InfluencerData>
                    </Instagram>
            }
            {socialMedia.tiktok &&
                <TikTok onClick={() => {
                    setInstagram(false)
                    setYoutube(false)
                    setTiktok(true)
                    setTwitter(false)
                }}>
                    <img src={tiktokIcon} alt=""/>
                    <InfluencerData>
                        <InfluencerName>{socialMedia.tiktok.username}</InfluencerName>
                        <InfluencerFollowers>{socialMedia.tiktok.followers}</InfluencerFollowers>
                    </InfluencerData>
                </TikTok>
            }
            {socialMedia.facebook &&
                <Facebook>
                    <img src={facebookIcon} alt=""/>
                    <InfluencerData>
                        <InfluencerName>{socialMedia.facebook.username}</InfluencerName>
                        <InfluencerFollowers>{socialMedia.facebook.followers}</InfluencerFollowers>
                    </InfluencerData>
                </Facebook>
            }
            {socialMedia.youTube &&
                <YouTube onClick={() => {
                    setInstagram(false)
                    setYoutube(true)
                    setTiktok(false)
                    setTwitter(false)
                }}>
                    <img src={youtubeIcon} alt=""/>
                    <InfluencerData>
                        <InfluencerName>{socialMedia.youTube.username}</InfluencerName>
                        <InfluencerFollowers>{socialMedia.youTube.followers}</InfluencerFollowers>
                    </InfluencerData>
                </YouTube>
            }
            {socialMedia.twitter &&
                <Twitter onClick={() => {
                    setInstagram(false)
                    setYoutube(false)
                    setTiktok(false)
                    setTwitter(true)
                }}>
                    <img src={twitterIcon} alt=""/>
                    <InfluencerData>
                        <InfluencerName>{socialMedia.twitter.username}</InfluencerName>
                        <InfluencerFollowers>{socialMedia.twitter.followers}</InfluencerFollowers>
                    </InfluencerData>
                </Twitter>
            }
        </SocialMediaList>
    );
};

export default InfluencerSocial;
