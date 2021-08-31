import React from 'react';
import ReactPlayer from 'react-player';

import {Videos} from './YouTube. style';

const YouTube = ({videos}) => {
    console.log('V I D E O S', videos)

    return (
        <Videos>
            {videos.map(video => {
                return (
                    <ReactPlayer key={video.videoUrl} height={'550px'} width={'870px'} style={{marginBottom: '60px'}} controls url={video.videoUrl} />
                );
            })}
        </Videos>
    );
};

export default YouTube;
