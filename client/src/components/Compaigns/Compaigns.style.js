import styled from 'styled-components';

const CompaignsWrapper = styled.div`
  width: 100%;
`;

const CompaignsContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 24px 68px 0 28px;

  display: flex;
`;

const Filters = styled.div`
  width: 192px;
  margin: 0 32px 0 0;
`;

const FiltersTitle = styled.div`
  font-weight: 700;
  font-size: 16px;

  color: rgba(21, 21, 21, 1);
  
  margin: 0 0 23px 0;
`;

const Search = styled.div`
  position: relative;
  
  & input {
    width: 100%;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  
  top: 10px;
  left: 10px;
  
  z-index: 1000;
`;

const MinMaxInput = styled.input`
  width: 84px;
  height: 32px;
  
  margin: 0 0 16px;
  padding: 8px 3px 6px 12px;
  
  font-weight: 400;
  font-size: 14px;
  
  border: 1px solid rgba(191, 191, 191, 1);
  border-radius: 6px;
  
  &:nth-of-type(1) {
    margin-right: 16px;
  }
  
  &:nth-of-type(3) {
    margin-right: 16px;
  }
`;

const CompaignsTable = styled.table`
  width: 85%;

  border-spacing: 0;
`;

const CompaignsTR = styled.tr`
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 0 5px 0;

  background-color: #fff;

  & th{
    padding: 0 0 0 16px;
    
    text-align: left;

    font-weight: 400;
    font-size: 14px;

    color: rgba(0, 0, 0, 0.6);
  }
`;

export {
    CompaignsWrapper,
    CompaignsContainer,
    Filters,
    FiltersTitle,
    Search,
    SearchIcon,
    MinMaxInput,
    CompaignsTable,
    CompaignsTR
};
