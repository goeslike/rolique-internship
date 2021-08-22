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

export {
    CompaignsWrapper,
    CompaignsContainer,
    Filters,
    FiltersTitle,
    Search,
    SearchIcon
};
