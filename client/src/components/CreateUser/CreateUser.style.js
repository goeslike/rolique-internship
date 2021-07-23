import styled from 'styled-components';

const UserWrapper = styled.div`
  width: 100%;
`;

const UserHeader = styled.header`
  height: 80px;
  width: 100%;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
  margin: 0 0 24px;
  
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  
  color: rgba(21, 21, 21, 1);
`


export {
    UserHeader,
    UserWrapper,
    UserContainer,
    UserFirstSection,
    UserSecondSection
}