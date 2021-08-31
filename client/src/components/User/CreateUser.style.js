import styled from 'styled-components';

const UserWrapper = styled.div`
  width: 100%;
  
  position: relative;
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

    margin: 0 0 0 10px;
    
    & div {
      width: 372px;
      height: auto;
      
      display: none;
      
      padding: 12px 16px;

      background-color: rgba(0, 0, 0, .8);
      border-radius: 8px;
      
      font-weight: 400;
      font-size: 14px;
      line-height: 1.6;
      color: rgba(238, 238, 238, 1);

      position: absolute;

      top: 195%;
      left: -175px;
      
      transition: all .5s linear;
      
      z-index: 1001;
    }
    
    &:hover::before {
      content: '';
      display: block;
      
      position: absolute;
      
      top: 120%;
      left: 0;
      
      z-index: 1001;

      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 12px 10px;
      border-color: transparent transparent rgba(0, 0, 0, .8) transparent;
    }
    
    &:hover div {
      display: block;
    }
  }
`;

const InfoIcon = styled.img`

`;

const PreviewImg = styled.img`
  display: block;
  position: relative;

  width: 64px;
  height: 64px;

  margin: 0 0 24px;

  cursor: pointer;
  
  border-radius: 50%;
`;

export {
    UserWrapper,
    UserContainer,
    UserFirstSection,
    UserSecondSection,
    UserSectionTitle,
    InfoIcon,
    PreviewImg
};
