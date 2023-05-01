import styled from 'styled-components';

export const TweetContainer = styled.div`
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 360px;
  height: 440px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
  padding:20px;
  padding-bottom: 36px;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
`;

export const TweetsTitle = styled.p`
  width: 132px;
  height: 24px;


  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  text-align: center;
  margin: 0;
  margin-bottom: 16px;
`;

export const FollowersTitle = styled.p`
  width: 214px;
  height: 24px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  text-align: center;
  margin: 0;
  margin-bottom: 26px;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Vector = styled.img`
  width: 76px;
  height: 22px;
`;

export const TweetContent = styled.div`
  flex: 1;
`;

export const FollowButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${props => (props.$following ? '#5CD3A8' : '#EBD8FF')};
  color: ${props => (props.$following ? '#fff' : '#000')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const Line = styled.div`
  width: 100%;
  top: 45%;
  position: absolute;
  height: 8px;
  left: 0px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  border: 8px solid #ebd8ff ; 
  position: absolute;
  top: 45%;
  left: calc(50% - 44px);
  transform: translateY(-50%);
  background: #EBD8FF;
  outline: 8px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
`;

export const PictureTop = styled.img`
  width:308px;
  height:168px;
`;

export const Logo = styled.img`
  width:76px;
  height:22px;
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const TweetTopContainer = styled.div`
 
`;

export const TweetBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;