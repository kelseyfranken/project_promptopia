
"use client";
import Profile from "@components/Profile";
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())


export default function UserProfile({params, searchParams}) {
  const {userId} = params;
  const {username} = searchParams;
  const { data: posts } = useSWR(userId ? `/api/users/${userId}/posts` : '', fetcher)

  return (
    <Profile
    name={`${username}'s`}
    desc={`Welcome to ${username}'s profile`}
    data={posts}
    />
  )
}
