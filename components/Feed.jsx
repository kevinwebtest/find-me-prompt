'use client';

import { useState, useEffect } from 'react';

import PromptCard from './PromptCard';
import { set } from 'mongoose';
const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post)=>(
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
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // delay 0.5 seconds before searching
    setSearchTimeout(
      setTimeout(()=>{
        const newSearchResults = filterPrompts(e.target.value);
        setSearchResults(newSearchResults);
      }, 500)
    );
  }

  const handleTagClick = (tag)=>{
    setSearchText(tag);
    
    const newSearchResults = filterPrompts(tag);
    setSearchResults(newSearchResults);
  }
  
  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json();

    setPosts(data);
  }
  
  useEffect(()=>{
    fetchPosts();
  },[]);

  const filterPrompts = (searched) => {
    const regex = new RegExp(searched, 'i'); // i means case insensitive
    return posts.filter((post)=>(
      regex.test(post.creator.username) ||
      regex.test(post.prompt) ||
      regex.test(post.tag)
    ))
  }

  

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input 
          type="text" 
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList 
        data={searchText===""? posts : searchResults}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed