import styled from 'styled-components';

const UserWrapper = styled.div`
  width: 100%;
`;

const UserContainer = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  
  padding: 47px 180px 0;
`;

const UserFirstSection = styled.div`
  height: auto;
  width: 408px;
`;

const UserSecondSection = styled.div`
  height: auto;
  width: 408px;
`;

const UserSectionTitle = styled.h3`
  display: flex;
  align-items: center;
  
  margin: 0 0 24px;
  
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  
  color: rgba(21, 21, 21, 1);
  
  & span {
    display: flex;
    align-items: center;
    
    position: relative;
    
    &:hover::before {
      content: '';
      display: block;
      
      position: absolute;
      
      top: 120%;
      left: 30%;
      
      z-index: 1000;

      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 12px 10px;
      border-color: transparent transparent rgba(0, 0, 0, .8) transparent;
    }
    
    &:hover::after {
      content: '';
      display: block;
      
      position: absolute;

      top: 190%;
      left: -142px;
      
      width: 327px;
      height: 244px;
      
      background-color: rgba(0, 0, 0, .8);
      border-radius: 8px;
    }
  }
`;

const InfoIcon = styled.img`
  margin: 0 0 0 10px;
`;

export {
    UserWrapper,
    UserContainer,
    UserFirstSection,
    UserSecondSection,
    UserSectionTitle,
    InfoIcon
};