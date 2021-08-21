import React from 'react';

import {
    SocialMediaList,
    InfluencerData,
    InfluencerName,
    InfluencerFollowers,
    Instagram,
    TikTok,
    Facebook,
    YouTube,
    Blog,
    Twitter
} from './InfluencerSocial.style';

import instagramIcon from '../../assets/influencer-social/instagram.png';
import tiktokIcon from '../../assets/influencer-social/tiktik.png';
import facebookIcon from '../../assets/influencer-social/facebook.png';
import youtubeIcon from '../../assets/influencer-social/youtube.png';
import blogIcon from '../../assets/influencer-social/blog.png';
import twitterIcon from '../../assets/influencer-social/twitter.png';

const InfluencerSocial = ({socialMedia}) => {
    return (
        <SocialMediaList>
            {socialMedia.instagram &&
                <Instagram>
                    <img src={instagramIcon} alt=""/>
                    <InfluencerData>
                        <InfluencerName>{socialMedia.instagram.username}</InfluencerName>
                        <InfluencerFollowers>{socialMedia.instagram.followers}</InfluencerFollowers>
                    </InfluencerData>
                </Instagram>
            }
        </SocialMediaList>
    );
};

export default InfluencerSocial;
