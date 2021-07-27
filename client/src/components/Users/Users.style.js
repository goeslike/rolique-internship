import styled from 'styled-components';

const UsersWrapper = styled.div`
  width: 100%;
`;

const UsersContainer = styled.div`
  width: 100%;
  height: 100vh;
  
  padding: 24px 68px 0 28px;
`;

const UsersTable = styled.table`
  width: 100%;  
  
  border-spacing: 0;
`;

const UsersTR = styled.tr`
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

const UsersTD = styled.td`
  display: flex;
  align-items: center;
  
  padding: 0 0 0 16px;
  
  font-weight: 400;
  font-size: 14px;
  
  color: rgba(56, 56, 56, 1);
  
  &:nth-child(1) img {
    height: 32px;
    width: 32px;
    
    margin: 0 16px 0 0;
    
    border-radius: 50%;
  }
  
  &:nth-child(5) {
    height: 100%;
    
    padding: 0 0;

    display: flex;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;

    background-color: #E7E6E8;
  }
`

export {
    UsersWrapper,
    UsersContainer,
    UsersTable,
    UsersTR,
    UsersTD
};