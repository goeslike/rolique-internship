import React, { useState } from 'react';

import Modal from '../Modal/Modal.jsx';

import galleryIcon from '../../assets/posts/gallery.png';
import videoIcon from '../../assets/posts/play-button.png'

import {
    Posts,
    Post,
    PostImg,
    Icon
} from './InstagramPosts.style';

const InstagramPosts = ({posts}) => {
    const [modalActive, setModalActive] = useState(false);

    const [photo, setPhoto] = useState();
    const [video, setVideo] = useState();
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
                        setVideo(null);

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
                    setVideo(null);
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
                <>
                    <img src={gallery[0]}/>
                    <img src={gallery[1]}/>
                </>}
            </Modal>

        </Posts>
    );
};

export default InstagramPosts;
