import styled from 'styled-components';

const Videos = styled.div`
  width: 1500px;

  margin: 44px auto 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  & a {
    margin-bottom: 40px;
    position: relative;
    
    &:hover img {
      display: inline-block;
    }
  }
`;

const Post = styled.div`
  width: 25%;
  padding: 0 40px 24px 0;
`;

const VideoImg = styled.img`
  width: 100%;
  height: auto;
`;

const PlayIcon = styled.img`
  display: none;
  position: absolute;

  top: 50%;  
  left: 50%; 

  transform: translate(-50%, -50%); 
`;

export {
    Videos,
    Post,
    VideoImg,
    PlayIcon
}
