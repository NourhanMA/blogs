
'use client'
import axios from 'axios'
import SinglePost from './SinglePost'
import { useEffect, useState } from "react";
import Navbar from './Navbar';
import useGetPosts from "../hooks/useGetPosts"
function HomePage() {

  const [allPosts, setAllPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("data.json").then(({ data }) => {
      setAllPosts(data);
      setFilteredPosts(data);
      const uniqueCategories = [...new Set(data.map(post => post.category))];
      setCategories(uniqueCategories);

    });
  }, [])



  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    if (searchQuery.trim() === '') {
      setFilteredPosts(allPosts);
      handleCategory('All');
    } else {
      const filtered = allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  const handleCategory = (category) => {

    setSelectedCategory(category);
    if (searchQuery.trim() === '') {
      if (category === 'All') {
        setFilteredPosts(allPosts);
      } else {
        const filtered = allPosts.filter((post) => post.category === category);
        setFilteredPosts(filtered);
      }
    } else {

      const filtered = allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (category === 'All' || post.category === category)
      );
      setFilteredPosts(filtered);
    }
  }


  if (!allPosts) {
    return (
      <p className="font-black text-black">Loadin...</p>
    )
  }


  return (
    <>
      <div className='basis-full'>
        <Navbar categories={categories} onSearch={handleSearch} onCategory={handleCategory} />
      </div>
      <div className='flex flex-wrap w-3/4 justify-center items-start '>
        {filteredPosts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default HomePage;

