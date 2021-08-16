import styled from 'styled-components';

const InfluencerWrapper = styled.div`
  width: 100%;
`;

const InfluencerContainer = styled.div`
  width: 100%;

  padding: 40px 28px 0 28px;
`;

const InfluencerInfo = styled.div`
  display: flex;
`;

const InfluencerAvatar = styled.img`
  width: 104px;
  height: 104px;
  
  margin: 0 24px 0 0;
  
  border-radius: 50%;

  object-fit: cover;
`;

const InfluencerName = styled.div`
  font-weight: 700;
  font-size: 20px;
  
  margin: 0 0 16px;
  
  color: rgba(21, 21, 21, 1);
`;

const InfluencerData = styled.span`
  display: flex;
  
  margin: 0 0 4px;
  
  & div:nth-child(1) {
    width: 95px;
    
    font-weight: 400;
    font-size: 14px;
    
    color: rgba(56, 56, 56, 0.6);
  }

  & div:nth-child(2) {
    font-weight: 400;
    font-size: 14px;

    color: rgba(56, 56, 56, 1);
  }
`;

const InfluencerPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  margin: 44px 0 0;
`;

const InfluencerPost = styled.div`
  width: 25%;
  padding: 0 40px 24px 0;
`;

const InfluencerPostImg = styled.img`
  width: 100%;
  height: 400px;
  
  object-fit: cover;
`;

export {
    InfluencerWrapper,
    InfluencerContainer,
    InfluencerInfo,
    InfluencerAvatar,
    InfluencerName,
    InfluencerData,
    InfluencerPosts,
    InfluencerPost,
    InfluencerPostImg
};
