import React, { useContext } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Feed = ({username}) => {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  const fetchPosts = async () =>{
    try{
      const res = username 
      ? await axios.get("/posts/profile/" + username) 
      : await axios.get("/posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        }));
    } catch(err){console.log(err)}
  }

  useEffect(() => {
      fetchPosts();
       // eslint-disable-next-line    
  },[username,user._id]);

  return (
    <div className="feed">
        <div className="feedWrapper">
         {(!username || username === user.username) &&<Share/>}
         {posts.map((p) => (
         <Post key={p.id} post={p}/>
         ) )}
        </div>
    </div>
  )
}

export default Feed
