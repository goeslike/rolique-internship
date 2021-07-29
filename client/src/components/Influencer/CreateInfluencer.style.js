import styled from 'styled-components';

const InfluencerWrapper = styled.div`
  width: 100%;
`;

const InfluencerContainer = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  
  padding: 47px 180px 0;
`;

const InfluencerSection = styled.div`
  height: auto;
  width: 408px;
`;

const InfluencerSectionTitle = styled.h3`
  display: flex;
  align-items: center;
  
  margin: 0 0 24px;
  
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  
  color: rgba(21, 21, 21, 1);
`;

const InfluencerSocial = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export {
    InfluencerWrapper,
    InfluencerContainer,
    InfluencerSection,
    InfluencerSectionTitle,
    InfluencerSocial
};