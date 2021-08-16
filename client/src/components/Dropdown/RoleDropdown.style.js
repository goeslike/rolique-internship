import styled from 'styled-components';

const RoleSelect = styled.div`
  user-select: none;
  position: relative;
`;

const RoleDropdownButton = styled.div`
  width: 408px;
  height: 32px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin: 0 0 39px;
  padding: 8px 9px 8px 12px;

  background: #fff;

  font-weight: 400;
  font-size: 14px;

  cursor: pointer;
  border-radius: 6px;
`;

const RoleDropdownOptions = styled.div`
  width: 100%;

  position: absolute;
  top: 105%;
  left: 0;

  z-index: 1000;

  background: #fff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);

  border-radius: 6px;
  border: 1px solid rgba(191, 191, 191, 0.5);
`;

const RoleDropdownOption = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  
  padding: 0 0 0 12px;

  cursor: pointer;
  
  font-weight: 400;
  font-size: 14px;
  color: rgba(56, 56, 56, 1);

  &:hover {
    background-color: #E5E5E5;  
    font-weight: 700;
  }
`;

export {
    RoleSelect,
    RoleDropdownButton,
    RoleDropdownOptions,
    RoleDropdownOption
};
