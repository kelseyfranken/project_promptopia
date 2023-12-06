"use client"
import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'


const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
        />
      ))}

    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
  
  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    const searchResults = posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
    return searchResults;
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const searchResults = filterPrompts(e.target.value);
    setFilteredPosts(searchResults);
  }

  const handleTagClick = (tag) => {
    setSearchText(tag);
    const searchResults = filterPrompts(tag);
    setFilteredPosts(searchResults);
  }


  return (
    <section className='feed'>
      <form className='relative w-full flex-center' >
        <input
        type='text'
        placeholder='Search for a prompt, tag or a username'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
        onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
        />
        </form>
        <PromptCardList data={searchText ? filteredPosts : posts}  handleTagClick={handleTagClick}/>
    </section>
  )
}

export default Feed