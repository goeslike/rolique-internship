import styled from "styled-components";

const Header = styled.header`
  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 68px 0 32px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const HeaderTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  
  color: rgba(21, 21, 21, 1);
  
  & img {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const HeaderButton = styled.button`
  width: 123px;
  height: 33px;
  
  font-size: 14px;
  font-weight: 400;
  
  color: rgba(255, 255, 255, 1);

  cursor: pointer;
  
  border: none;
  border-radius: 8px;

  background: linear-gradient(to right, rgba(255, 101, 14, 1), rgba(255, 101, 14, 1));
`;

const HeaderSelect = styled.select`
  width: auto;
  height: 33px;
  
  padding: 8px 16px 8px 32px;

  font-weight: normal;
  font-size: 14px;
  
  color: #ffffff;
  
  border-radius: 8px;
  border: none;
  
  outline: none;
  
  background: linear-gradient(to right, rgba(255, 101, 14, 1), rgba(255, 101, 14, 1));
  
  & option {
    color: #000000;
  }
`

export {
    Header,
    HeaderTitle,
    HeaderButton,
    HeaderSelect
};