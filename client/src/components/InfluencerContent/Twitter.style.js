import styled from 'styled-components';

const Tweets = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
`;

const Tweet = styled.div`
  display: flex;
  
  width: 750px;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  
  margin: 0 15px 0 0;
  
  border-radius: 50%;
`;

const Name = styled.span`
  font-weight: 700;
  color: #000;
`;

const UserName = styled.span`
  font-weight: 400;
  color: #ccc;
`;

const PostText = styled.div`
  margin: 10px 0 20px;
`;

export {
    Tweets,
    Tweet,
    Avatar,
    Name,
    UserName,
    PostText
};
