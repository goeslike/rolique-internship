import React from 'react';
import ReactPlayer from 'react-player';

import {Videos} from './YouTube. style';

const YouTube = ({videos}) => {
    return (
        <Videos>
            {videos.map(video => {
                return (
                    <ReactPlayer controls url={video.videoUrl} />
                );
            })}
        </Videos>
    );
};

export default YouTube;
