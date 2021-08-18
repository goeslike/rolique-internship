import React, { useState } from 'react';

import Modal from '../Modal/Modal';

import {
    Posts,
    Post,
    PostImg
} from './InstagramPosts.style';

const InstagramPosts = ({posts}) => {
    console.log(posts, 'P O S T S');
    const [modalActive, setModalActive] = useState(false);

    return (
        <Posts>
            {posts.map(post => {
                return (
                    <Post key={post.photo}>
                        <PostImg src={post.photo} onClick={() => {
                            setModalActive(true)
                        }}/>
                    </Post>
                );
            })}
            {modalActive &&
                <Modal>
                    Modal
                </Modal>
            }
        </Posts>
    );
};

export default InstagramPosts;
