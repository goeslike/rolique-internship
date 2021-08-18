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
`;

const PostImg = styled.img`
  width: 100%;
  height: 400px;
  
  object-fit: cover;
`;

export {
    Posts,
    Post,
    PostImg
};
