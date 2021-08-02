import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 40px;
  height: 100vh;
  min-height: 100%;

  background-color: #121033;
  
  & a {
    height: 48px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  & a:nth-child(2) {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  & a:hover {
    background-color: rgba(255, 101, 14, 1);
  }
`;

const SidebarLogo = styled.img`
  margin: 23px 9px 20px 10px;
`;


export {
    SidebarContainer,
    SidebarLogo
}