import React from 'react';
import ReactPlayer from 'react-player';

import {Videos} from './YouTube. style';

const YouTube = ({videos}) => {
    return (
        <Videos>
            {videos.map(video => {
                return (
                    <ReactPlayer height={'550px'} width={'870px'} style={{marginBottom: '60px'}} controls url={video.videoUrl} />
                );
            })}
        </Videos>
    );
};

export default YouTube;
