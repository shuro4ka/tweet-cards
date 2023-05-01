import { useEffect, useState } from "react";
import { getAllUsers } from "service/api";
import { TweetsList } from "../components/TweetsList/TweetsList 2"
import React from 'react';
import { Link } from 'react-router-dom';

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function startFetching() {
      try {
        const result = await getAllUsers();
        setUsers(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    startFetching();
  }, []);

  return (
    <>
    <button>
        <Link to="/">Back</Link>
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TweetsList users={users} />
        
      )}
      {(!loading && users.length === 0) && (
        <p>No tweets found</p>
       
      )}
    </>
  );
};