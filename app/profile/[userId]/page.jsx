
"use client";
import Profile from "@components/Profile";
import { useState, useEffect } from "react";

export default function UserProfile({params, searchParams}) {
  const [posts, setPosts] = useState([]);
  const {userId} = params;
  const {username} = searchParams;

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
    }
    if(userId) {
        fetchPosts();
    }
  }, [])
  return (
    <Profile
    name={`${username}'s`}
    desc={`Welcome to ${username}'s profile`}
    data={posts}
    />
  )
}
