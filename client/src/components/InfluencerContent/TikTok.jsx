import React from 'react';
import { Videos, VideoImg } from './TikTok.style';

const TikTok = ({videos}) => {
    return (
        <Videos>
            {videos.map(video => {
                return (
                    <a href={video.video} target={'_blank'}>
                        <VideoImg src={video.image} />
                    </a>
                );
            })}
        </Videos>
    );
};

export default TikTok;
