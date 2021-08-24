import styled from 'styled-components';

const SocialMediaList = styled.div`
  display: flex;
`;

const InfluencerData = styled.div`
  display: flex;
  flex-wrap: wrap;

  font-weight: 400;
  font-size: 13px;

  color: #fff;
`;

const InfluencerName = styled.div`
  display: flex;
  
  width: auto;
  min-width: 92px;
`;

const InfluencerFollowers = styled.div`
  display: flex;
`;


const Instagram = styled.div`
  display: flex;
  align-items: center;

  width: 140px;
  height: 40px;

  margin: 24px 16px 0 0;
  padding: 4px 8px;

  border-radius: 17px;

  & img {
    margin: 0 7px 0 0;
  }
  
  cursor: pointer;
  
  background: radial-gradient(
    114.11% 114.11% at 22.66% 97.97%, 
    #FED574 0%, 
    #FDCB70 5.15%, 
    #F8AF66 14.03%, 
    #F28256 25.48%, 
    #EC5847 34.88%, 
    #C73283 64.9%, 
    #5C6CB3 100%);
`;

const TikTok = styled.div`
  display: flex;
  align-items: center;

  width: 140px;
  height: 40px;

  margin: 24px 16px 0 0;
  padding: 4px 8px;

  border-radius: 17px;

  & img {
    margin: 0 7px 0 0;
  }

  cursor: pointer;

  background: #000000;
`;

const Facebook = styled.div`
  display: flex;
  align-items: center;

  width: 140px;
  height: 40px;

  margin: 24px 16px 0 0;
  padding: 4px 8px;

  border-radius: 17px;

  & img {
    margin: 0 7px 0 0;
  }

  cursor: pointer;

  background: #415A94;
`;

const YouTube = styled.div`
  display: flex;
  align-items: center;

  width: 140px;
  height: 40px;

  margin: 24px 16px 0 0;
  padding: 4px 8px;

  border-radius: 17px;

  & img {
    margin: 0 7px 0 0;
  }

  cursor: pointer;

  background: #C13732;
`;

const Twitter = styled.div`
  display: flex;
  align-items: center;

  width: 140px;
  height: 40px;

  margin: 24px 16px 0 0;
  padding: 4px 8px;

  border-radius: 17px;

  & img {
    margin: 0 7px 0 0;
  }

  cursor: pointer;

  background: #68ABE7;
`;

export {
    SocialMediaList,
    InfluencerData,
    InfluencerName,
    InfluencerFollowers,
    Instagram,
    TikTok,
    Facebook,
    YouTube,
    Twitter
};
