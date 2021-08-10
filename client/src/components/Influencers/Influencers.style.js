import styled from 'styled-components';

const InfluencersWrapper = styled.div`
  width: 100%;
`;

const InfluencersContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 24px 68px 0 28px;
`;

const InfluencersTable = styled.table`
  width: 100%;  
  
  border-spacing: 0;
`;

const InfluencersTR = styled.tr`
  height: 56px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin: 0 0 5px 0;
  
  text-align: left;
  
  font-weight: 400;
  font-size: 14px;

  color: rgba(0, 0, 0, 0.6);
  background-color: #fff;
  
  & th{
    padding: 0 0 0 16px;
  }
`;

export {
    InfluencersWrapper,
    InfluencersContainer,
    InfluencersTable,
    InfluencersTR
};
