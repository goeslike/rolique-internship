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

const EditButton = styled.div`
  width: 73px;
  height: 33px;

  display: flex;
  align-items: center;
  
  padding: 8px 16px 8px 10px;
  margin: 0 12px 0 0;
  
  border-radius: 8px;
  border: 1px solid rgba(191, 191, 191, 1);
  
  font-weight: 400;
  font-size: 14px;
  
  color: rgba(0, 0, 0, 0.6);

  user-select: none;
  cursor: pointer;
  
  & img {
    margin: 0 10px 0 0;
  }
`;

export {
    Header,
    HeaderTitle,
    HeaderButton,
    EditButton
};
