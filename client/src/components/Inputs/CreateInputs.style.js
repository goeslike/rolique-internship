import styled from 'styled-components';

const Input = styled.input`
  width: 408px;
  height: 32px;
  
  padding: 0 12px 0 12px;
  margin: 0 0 16px 0;

  outline: none;

  border: 1px solid #BFBFBF;
  border-radius: 6px;

  font-size: 14px;

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

const CheckBoxLabel = styled.label`
  width: 16px;
  height: 16px;
  
  margin: 0 12px 0 0;
  
  border-radius: 2px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Switch = styled.label`
  position: relative;

  width: 44px;
  height: 24px;
  
  margin: 0 28px 0 0;
  
  display: inline-block;

  & input:checked + span {
    background-color: rgba(255, 101, 14, 1);
  }

  & input:checked + span:before {
    transform: translateX(18px);
  }
`;

const SwitchCheckbox = styled.input`
  display: none;
`;

const SwitchSlider = styled.span`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(144, 152, 161, 1);

  cursor: pointer;

  border-radius: 16px;

  transition: .4s;
  
  &:before {
    position: absolute;
    content: "";

    width: 18px;
    height: 18px;

    left: 4px;
    bottom: 3px;

    background-color: rgba(255, 255, 255, 1);

    border-radius: 50%;

    transition: .4s;
  }
`;

export {
    Input,
    Label,
    FileLabel,
    HelperText,
    SocialInput,
    SearchInput,
    Search,
    SearchIcon,
    CheckBoxLabel,
    Switch,
    SwitchCheckbox,
    SwitchSlider
};
