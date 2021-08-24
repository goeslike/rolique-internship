import React from 'react';
import { Videos, VideoImg } from './TikTok.style';

const TikTok = ({videos}) => {
    return (
        <Videos>
            {videos.map(video => {
                return (
                    <a key={video.video} href={video.video} target={'_blank'} rel='noreferrer'>
                        <VideoImg src={video.image} alt={'video-preview'}/>
                    </a>
                );
            })}
        </Videos>
    );
};

export default TikTok;
