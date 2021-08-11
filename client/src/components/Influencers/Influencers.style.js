import styled from 'styled-components';

const InfluencersWrapper = styled.div`
  width: 100%;
`;

const InfluencersContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 24px 68px 0 28px;
`;

const InfluencersTable = styled.table`
  width: 100%;  
  
  border-spacing: 0;
`;

const InfluencersTR = styled.tr`
  height: 56px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin: 0 0 5px 0;
  
  text-align: left;
  
  font-weight: 400;
  font-size: 14px;

  color: rgba(0, 0, 0, 0.6);
  background-color: #fff;
  
  & th{
    padding: 0 0 0 16px;
  }
`;

const InfluencersTD = styled.td`
  display: flex;
  align-items: center;

  padding: 0 0 0 16px;

  font-weight: 400;
  font-size: 14px;

  color: rgba(56, 56, 56, 1);

  &:nth-child(1) img {
    height: 32px;
    width: 32px;

    margin: 0 16px 0 0;

    border-radius: 50%;
  }

  &:nth-child(5) {
    height: 100%;

    padding: 0 0;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: #E7E6E8;

    & span {
      position: relative;

      & div {
        display: none;

        width: 130px;
        height: 44px;

        padding: 12px 0 12px 16px;

        background-color: rgba(0, 0, 0, .8);
        border-radius: 8px;

        font-weight: 400;
        font-size: 14px;
        color: rgba(238, 238, 238, 1);

        position: absolute;

        top: -75%;
        right: 281%;

        z-index: 1000;
      }

      &:hover div {
        display: block;
      }

      &:hover::after {
        content: '';
        display: block;

        position: absolute;

        top: 1%;
        left: -180%;

        z-index: 1000;

        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 0 10px 12px;
        border-color: transparent transparent transparent rgba(0, 0, 0, .8);
      }
    }
  }
`;

const InfluencerSocialIcon = styled.img`
  width: 12px;
  height: 12px;
  
  margin-right: 4px;
  
  border-radius: 50%;
`;

export {
    InfluencersWrapper,
    InfluencersContainer,
    InfluencersTable,
    InfluencersTR,
    InfluencersTD,
    InfluencerSocialIcon
};
