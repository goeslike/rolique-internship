import styled from 'styled-components';

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  margin: 44px 0 0;
`;

const Post = styled.div`
  width: 25%;
  padding: 0 40px 24px 0;
  
  position: relative;
`;

const PostImg = styled.img`
  width: 100%;
  height: 500px;
  
  cursor: pointer;
  object-fit: cover;
`;

const Icon = styled.img`
  position: absolute;
  
  top: 20px;
  right: 60px;

  cursor: pointer;
`;

export {
    Posts,
    Post,
    PostImg,
    Icon
};
