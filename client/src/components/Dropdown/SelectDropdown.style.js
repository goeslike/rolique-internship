import styled from 'styled-components';

const SelectDropdow = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 408px;
  height: 32px;
  
  margin: 0 0 16px;
  padding: 8px 13px 7px 12px;
  
  background-color: #fff;
  
  border: 1px solid;
  border-radius: 6px;

  cursor: pointer;
  user-select: none;
  
  font-weight: 400;
  font-size: 14px;
  color: rgba(56, 56, 56, 1);

  & span {
    color: rgba(56, 56, 56, 0.45);
  }
`;

const SelectItems = styled.div`
  position: absolute;
  
  width: 100%;
  height: auto;
  
  top: 110%;
  left: 0;
  z-index: 1000;

  border: 1px solid rgba(191, 191, 191, 1);
  border-radius: 6px;
  
  background-color: #fff;
`;

const SelectItem = styled.div`
  width: 100%;
  height: 40px;
  
  padding: 0 0 0 12px;
  
  display:flex;
  align-items: center;
  
  font-weight: 400;
  font-size: 14px;
  color: rgba(56, 56, 56, 1);
  
  cursor: pointer;
  
  &:hover {
     font-weight: 700;
     background-color: rgba(227, 227, 227, 1); 
  }
`;

export {
    SelectDropdow,
    SelectItems,
    SelectItem
}
