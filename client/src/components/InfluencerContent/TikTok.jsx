import React from 'react';
import playIcon from '../../assets/play.png';

import {Videos, VideoImg, Post, PlayIcon} from './TikTok.style';

const TikTok = ({videos}) => {
    return (
        <Videos>
            {videos.map(video => {
                return (
                    <Post key={video.video}>
                        <a href={video.video} target={'_blank'} rel='noreferrer'>
                            <VideoImg src={video.image} alt={'video-preview'}/>
                            <PlayIcon src={playIcon} alt="play"/>
                        </a>
                    </Post>
                );
            })}
        </Videos>
    );
};

export default TikTok;
