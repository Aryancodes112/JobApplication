import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../Styles/home.css';

const Home = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', query);
    // Add search logic here
  };

  return (
    <div className="home-container">
      <div className="left-container">
        <div className='text-block'>
          <h1>Find your dream job with us</h1>
        <p>Good life begins with good company</p>
        </div>
        

        <div className="search-fields">
          <input
            type="text"
            placeholder="Job Title"
            value={query}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Job Type"
            value={query}
            onChange={handleInputChange}
          />
          <button className="search-button" onClick={handleSearch}>
            <FaSearch className="search-icon" />
          </button>
        </div>
      </div>

      <div className="right-container">
        <img className="img1" src="Boy.png" alt="Job Search" />
      </div>
    </div>
  );
};

export default Home;
