import styled from 'styled-components';

const CompaignWrapper = styled.div`
  width: 100%;
`;

const CompaignContainer = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  
  padding: 47px 180px 0 140px;
`;

const CompaignSection = styled.div`
  height: auto;
  width: 408px;
  
  & span {
    display: flex;
    align-items: center;
  }
`;

const CompaignSectionTitle = styled.div`
  margin: 0 0 24px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  color: rgba(21, 21, 21, 1);
`;

export {
    CompaignWrapper,
    CompaignContainer,
    CompaignSection,
    CompaignSectionTitle
};
