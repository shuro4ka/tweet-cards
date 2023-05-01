import { Tweet } from "components/Tweet/Tweet";
import { TweetList } from "./TweetsList.styled";

export const TweetsList = ({users}) => {
    return(
      <TweetList>
          {users && users.length > 0 ? (users.map(({id, user, followers, tweets}) => (
              
              <Tweet key={id} id={id} followersInitial={followers} tweets={tweets} user={user} />
          ))
          ) : (
          <div>  
            <h2>Loading...</h2>
          </div>
          )}
              
      </TweetList>
    );
};