// src/app/pages/search/page.js
"use client";

import { useState } from 'react';
import SearchOverlay from '../../../components/SearchOverlay';
//import SearchOverlay from '../components/SearchOverlay';

const HomePage = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };

  const handleCloseSearch = () => {
    setIsSearchVisible(false);
  };

  return (
    <div className="relative">
      <header className="p-4 bg-blue-600 text-white">
        <h1 className="text-3xl">My Website</h1>
        <button
          onClick={handleSearchClick}
          className="mt-2 bg-white text-black p-2 rounded"
        >
          Search
        </button>
      </header>

      <main className="p-4">
        <h2 className="text-2xl mb-4">Welcome to the homepage!</h2>
        <p>Here is some content on the main screen.</p>
      </main>

      <SearchOverlay isVisible={isSearchVisible} onClose={handleCloseSearch} />
      
    </div>
  );
};

export default HomePage;
