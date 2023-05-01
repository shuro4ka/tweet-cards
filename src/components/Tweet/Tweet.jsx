import React, { useState, useEffect } from 'react';
import { FollowButton, TweetContainer, TweetsTitle, FollowersTitle, Line, Avatar, PictureTop, Logo, TweetTopContainer, TweetBottomContainer } from './Tweet.styled';
import UserAvatar from "../../images/UserAvatar.jpeg";
import Vector from "../../images/Vector.svg";
import Picture  from "../../images/Picture.svg";

export const Tweet = ({ id, followersInitial, tweets, user }) => {
  const [following, setFollowing] = useState(false);
  const [followers, setFollowers] = useState(followersInitial);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem(`tweetState${id}`));
    if (savedState) {
      setFollowing(savedState.following);
      setFollowers(savedState.followers);
    }
  }, [id]);


  const handleFollow = async () => {
    localStorage.setItem(`tweetState${id}`, JSON.stringify({ following: true, followers: followers + 1 }));
    setFollowing(true);
    setFollowers(followers + 1);
  };

  const handleUnfollow = async () => {
    localStorage.setItem(`tweetState${id}`, JSON.stringify({ following: false, followers: followers - 1 }));
    setFollowing(false);
    setFollowers(followers - 1);
  };

  return (
    <TweetContainer>
      <TweetTopContainer>
        <Logo src={Vector} alt="Go It Logo" />
        <PictureTop src={Picture} alt="Question Mark and Tick"/>
        <Line />
        <Avatar src={UserAvatar} alt="User Avatar" />
      </TweetTopContainer>
      <TweetBottomContainer>
        <TweetsTitle>tweets: {tweets}</TweetsTitle>
        <FollowersTitle>Followers: {followers}</FollowersTitle>
        {following ? (
          <FollowButton $following onClick={handleUnfollow}>
            Following
          </FollowButton>
        ) : (
          <FollowButton onClick={handleFollow}>Follow</FollowButton>
        )}
      </TweetBottomContainer>
    </TweetContainer>
  );
};