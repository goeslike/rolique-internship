import styled from 'styled-components';

const Input = styled.input`
  width: 408px;
  height: 32px;
  
  padding: 0 12px 0 12px;
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

const SocialInput = styled.input`
  width: 184px;
  height: 32px;

  padding: 0 0 0 12px;
  margin: 0 0 16px 0;

  outline: none;

  border: 1px solid #BFBFBF;
  border-radius: 6px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  
  &:focus {
    border: 1px solid rgba(255, 101, 14, 0.5);
    filter: drop-shadow(0 0 rgba(255, 101, 14, 0.25));
  }

  &:required {
    border: 1px solid #DA1414;
  }
`;

const Label = styled.div`
  width: auto;
  height: 17px;
  
  margin: 0 0 8px 0;
  
  font-weight: normal;
  font-size: 14px;
  
  color: rgba(0, 0, 0, 0.6);
`;

const FileLabel = styled.label`
  display: block;
  position: relative;

  width: 64px;
  height: 64px;

  margin: 0 0 24px;

  cursor: pointer;

  border: 1px dashed rgba(197, 146, 165, 0.8);
  border-radius: 50%;
  
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;

  &::after {
    content: "";
    position: absolute;
    display: block;
    background-color: #D0A7B6;
    height: 1px;
    top: 50%;
    left: 26px;
    right: 26px;
    z-index: 1000;
  }
  &::before {
    content: "";
    position: absolute;
    display: block;
    background-color: #D0A7B6;
    width: 1px;
    left: 50%;
    top: 26px;
    bottom: 26px;
    z-index: 1000;
  }
`

const Select = styled.select`
  width: 100%;
  height: 32px;

  padding: 0 12px;
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

const HelperText = styled.p`
  width: 100%;
  
  font-weight: normal;
  font-size: 12px;

  color: #DA1414;
`;

const Search = styled.div`
  position: relative;
`;

const SearchIcon = styled.img`
  position: absolute;
  
  top: 10px;
  left: 10px;
  
  z-index: 1000;
`;

const SearchInput = styled.input`
  width: 296px;
  height: 32px;
  
  padding: 0 0 0 28px;
  margin: 0 0 16px;

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
`;

export {
    Input,
    Label,
    FileLabel,
    Select,
    HelperText,
    SocialInput,
    SearchInput,
    Search,
    SearchIcon
};
