import React from 'react';

import instagram from '../../assets/channels/instagram.png';
import twitter from '../../assets/channels/twitter.png';
import youtube from '../../assets/channels/youtube.png';
import facebook from '../../assets/channels/facebook.png';
import tiktok from '../../assets/channels/tiktok.png';
import instStories from '../../assets/channels/instagram-stories.png';
import snapchat from '../../assets/channels/snap.png';

import {ChannelsWrapper, ChannelIcon} from './Channels.style';

const Channels = () => {
    return (
        <ChannelsWrapper>
            <ChannelIcon src={instagram} alt={'instagram'}/>
            <ChannelIcon src={twitter} alt={'twitter'}/>
            <ChannelIcon src={youtube} alt={'youtube'}/>
            <ChannelIcon src={facebook} alt={'facebook'}/>
            <ChannelIcon src={tiktok} alt={'tiktok'}/>
            <ChannelIcon src={instStories} alt={'instStories'}/>
            <ChannelIcon src={snapchat} alt={'snapchat'}/>
        </ChannelsWrapper>
    );
};

export default Channels;
