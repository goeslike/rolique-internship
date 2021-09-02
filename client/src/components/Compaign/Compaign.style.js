import styled from 'styled-components';

const CompaignWrapper = styled.div`
  width: 100%;
`;

const CompaignContainer = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  
  padding: 47px 180px 0 140px;
`;

const CompaignSection = styled.div`
  height: auto;
  width: 408px;
`;

const CheckSpan = styled.span`
  display: flex;
  align-items: center;

  margin: 0 0 40px 0;

  & div {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, .6);
  }
`;

const CompaignSectionTitle = styled.div`
  margin: 0 0 24px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  color: rgba(21, 21, 21, 1);
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewBrand = styled.div`
  display: flex;
  align-items: center;
  
  font-size: 14px;
  font-weight: 400;
  
  color: rgba(255, 101, 14, 1);
  
  cursor: pointer;
  
  & img {
    margin: 0 6px 0 0;
  }
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  
  color: rgba(21, 21, 21, 1);
  
  margin: 0 0 24px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Cancel = styled.div`
  width: 80px;
  height: 33px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 14px;
  font-weight: 400;
  
  color: rgba(0, 0, 0, .6);

  cursor: pointer;

  border: 1px solid #BFBFBF;
  border-radius: 8px;
`;

const CreateBrand = styled.div`
  width: 102px;
  height: 33px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 400;

  color: rgba(255, 255, 255, 1);
  
  cursor: pointer;

  background-color: rgba(255, 101, 14, 1);
  
  border-radius: 8px;
`;

const Line = styled.div`
  height: 1px;
  
  margin: 128px 180px 7px 140px;
  
  background-color: rgba(191, 191, 191, 1);
`;

const ToggleSection = styled.div`
  display: flex;
  align-items: flex-end;
  
  margin: 0 0 16px;
  
  &:last-child {
    margin: 0 0 48px;
  }
  
  & input {
    margin: 0;
    width: 336px;
  }
`;

const Description = styled.textarea`
  width: 100%;
  height: 64px;
  
  padding: 0 0 5px 5px;
  margin: 0 0 16px 0;
  
  border: 1px solid rgba(191, 191, 191, 1);
  border-radius: 6px;
  
  outline: none;
  
  resize: none;
  
  font-size: 14px;
  font-weight: 400;
`;

export {
    CompaignWrapper,
    CompaignContainer,
    CompaignSection,
    CompaignSectionTitle,
    CheckSpan,
    NewBrand,
    ModalTitle,
    Cancel,
    CreateBrand,
    Buttons,
    ModalWrapper,
    Line,
    ToggleSection,
    Description
};
