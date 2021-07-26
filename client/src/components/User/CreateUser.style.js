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
  
  & img {
    margin: 0 0 0 10px;
  }
`;

export {
    UserWrapper,
    UserContainer,
    UserFirstSection,
    UserSecondSection,
    UserSectionTitle
};