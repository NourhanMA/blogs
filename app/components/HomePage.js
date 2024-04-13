
'use client'
import axios from 'axios'
import SinglePost from './SinglePost'
import { useEffect, useState } from "react";
import Navbar from './Navbar';
import useGetPosts from "../hooks/useGetPosts"
function HomePage() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data = useGetPosts();
    setAllPosts(data);
    setFilteredPosts(data);
    const uniqueCategories = [...new Set(data.map(post => post.category))];
    setCategories(uniqueCategories);
  }, []);

  const filterPosts = () => {
    let filtered = allPosts;
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    setFilteredPosts(filtered);
  };

  useEffect(() => {
    filterPosts();
  }, [searchQuery, selectedCategory, allPosts]);

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  if (!allPosts) {
    return <p className="font-black text-black">Loading...</p>;
  }

  return (
    <>
      <div className='basis-full'>
        <Navbar categories={categories} onSearch={handleSearch} onCategory={handleCategory} />
      </div>
      <div className='flex flex-wrap w-full md:w-2/3 justify-start items-start min-h-screen'>
        {filteredPosts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default HomePage;