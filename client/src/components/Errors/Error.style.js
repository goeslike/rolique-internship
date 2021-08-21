import styled from 'styled-components';

const Error = styled.div`
  position: absolute;
  top: 87px;
  right: 180px;
  z-index: 100;
  
  width: 408px;
  height: 29px;

  display: flex;
  align-items: center;
  
  margin: 0 0 24px 0;
  padding: 0 0 0 16px;
  
  background-color: #FEEFEF;
  
  border-radius: 8px;
  border: 1px solid red;

  font-weight: normal;
  font-size: 14px;
  color: rgba(218, 20, 20, 1);
  
  & img {
    margin: 0 8px 0 0;
  }
`;

export {
    Error
};
