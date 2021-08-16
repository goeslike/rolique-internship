import styled from 'styled-components';

const Create = styled.div`
  user-select: none;
  position: relative;
`;

const CreateDropdownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 16px 8px 12px;
  
  background: linear-gradient(to right, rgba(255, 101, 14, 1), rgba(255, 101, 14, 1));
  
  font-weight: 400;
  font-size: 14px;
  
  color: rgba(255, 255, 255, 1);
  
  cursor: pointer;
  border-radius: 8px;
  
  & img {
    margin-right: 12px;
  }
`;

const CreateDropdownContent = styled.div`
  width: 100%;
  
  position: absolute;
  top: 120%;
  left: 0;
  
  z-index: 1000;
  
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  
  border-radius: 6px;
  border: 1px solid rgba(191, 191, 191, 0.5);
`;

const CreateDropdownItem = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  
  cursor: pointer;
  transition: all 0.2s;
  
  & a {
    width: 100%;
    height: 100%;

    padding: 10px 10px;

    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    color: rgba(125, 125, 125, 1);
  }
  
  &:hover {
    background-color: #E5E5E5;
  }
`;

export {
    Create,
    CreateDropdownButton,
    CreateDropdownContent,
    CreateDropdownItem
};
