import React, { useState } from 'react';

import Modal from '../Modal/Modal.jsx';

import galleryIcon from '../../assets/posts/gallery.png';
import videoIcon from '../../assets/posts/play-button.png'
import Slider from '../Slider/Slider';

import {
    Posts,
    Post,
    PostImg,
    Icon
} from './Instagram.style';

const Instagram = ({posts}) => {
    const [modalActive, setModalActive] = useState(false);

    const [photo, setPhoto] = useState();
    const [gallery, setGallery] = useState([]);

    const setPosts = (post) => {
        if (post.postVideo) {
            return (
                <>
                    <a href={post.postVideo.video} target={'_blank'}>
                        <PostImg src={post.postVideo.image} />
                    </a>
                    <Icon src={videoIcon}/>
                </>

            );
        }

        if (post.postCarousel) {
            return (
                <>
                    <PostImg src={post.postCarousel[0]} onClick={() => {
                        setPhoto(null);

                        setGallery(post.postCarousel);
                        setModalActive(true);
                    }}/>
                    <Icon src={galleryIcon}/>
                </>
            );
        }

        if (post.postImage) {
            return (
                <PostImg src={post.postImage} onClick={() => {
                    setGallery(null);

                    setPhoto(post.postImage);
                    setModalActive(true);
                }}/>
            );
        }
    }

    return (
        <Posts>
            {posts.map(post => {
                return (
                    <Post key={post.photo}>
                        {setPosts(post)}
                    </Post>
                );
            })}

            <Modal active={modalActive} setModalActive={setModalActive}>
                {photo && <img src={photo}/>}
                {gallery &&
                    <Slider photos={gallery} />
                }
            </Modal>

        </Posts>
    );
};

export default Instagram;
