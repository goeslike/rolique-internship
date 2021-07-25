import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 32px;
  
  padding: 0 0 0 12px;
  margin: 0 0 16px 0;

  outline: none;

  border: 1px solid #BFBFBF;
  border-radius: 6px;
  
  &:focus {
    border: 1px solid rgba(255, 101, 14, 0.5);
    filter: drop-shadow(0 0 rgba(255, 101, 14, 0.25));
  }
  
  &:required {
    border: 1px solid #DA1414;
  }
`;

const PictureInput = styled.input`
  width: 64px;
  height: 64px;
  
  margin: 0 0 24px;
  
  cursor: pointer;
  
  border: 1px dashed rgba(197, 146, 165, 0.8);
  border-radius: 50%;
`;

const Label = styled.div`
  width: 100%;
  height: 17px;
  
  margin: 0 0 8px 0;
  
  font-weight: normal;
  font-size: 14px;
  
  color: rgba(0, 0, 0, 0.6);
`;

const Select = styled.select`
  width: 100%;
  height: 32px;

  padding: 0 0 0 12px;
  margin: 0 0 16px 0;

  outline: none;

  background-color: #fff;

  border: 1px solid #BFBFBF;
  border-radius: 6px;

  font-weight: normal;
  font-size: 14px;

  color: rgba(0, 0, 0, 0.6);

  &:focus {
    border: 1px solid rgba(255, 101, 14, 0.5);
    filter: drop-shadow(0 0 rgba(255, 101, 14, 0.25));
  }

  &:required {
    border: 1px solid #DA1414;
  }
  
  & option {
    color: #000;
  }
`;

export {
    Input,
    Label,
    PictureInput,
    Select
};