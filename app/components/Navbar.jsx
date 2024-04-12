'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

const Navbar = ({ categories, onSearch, onCategory }) => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const handleSearch = (e) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch(query);
      onCategory('All'); // Reset the category to 'All' when searching
    };
  
    const handleCategoryClick = (category) => {
      onCategory(category);
      setSearchQuery(''); // Clear the search query when a category is selected
      setIsDropdownOpen(false); // Close the dropdown after selecting a category
    };
  
    return (
      <nav className="w-screen bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Blog Page
            </span>
          </a>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                onClick={() => {
                  router.push(`/`);
                  handleCategoryClick('All'); // Reset the category to 'All' when Home is clicked
                }}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="block py-2 px-3 rounded hover:bg-gray-200 md:p-0 dark:hover:bg-gray-700"
              >
                Categories
              </button>
              {isDropdownOpen && (
                <ul className="absolute z-10 w-40 py-2 mt-2 space-y-2 bg-white border border-gray-200 rounded shadow-md dark:bg-gray-800 dark:border-gray-700">
                  {categories.map((category) => (
                    <li key={category}>
                      <a
                        href="#"
                        onClick={() => handleCategoryClick(category)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <div className="relative hidden md:block">
            <input
              type="text"
              id="search-navbar"
              value={searchQuery}
              onChange={handleSearch}
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;