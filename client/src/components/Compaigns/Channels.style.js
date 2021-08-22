import styled from 'styled-components';

const ChannelsWrapper = styled.div`
    margin: 0 0 16px 0;
`;

const ChannelIcon= styled.img`
  width: 24px;
  height: 24px;
  
  margin: 0 4px 0 0;
  
  cursor: pointer;
  
  &:last-child {
    margin: 0;
  }
`;

export {
    ChannelsWrapper,
    ChannelIcon
};
