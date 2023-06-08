
// In SearchResultsPage.js
import React, { useState } from 'react';
import Header from '../Components/Header';
import SearchResults from '../Components/SearchResults';
import Footer from '../Components/Footer';
import '../CSS/searchpage.css'

function SearchResultsPage({ addToWatchlist }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchSearchResults();
    }
  };

  const fetchSearchResults = async () => {
    const apiKey = '499d99db6ce23991d21afde0deede0f1';
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
    );
    const data = await response.json();
    setSearchResults(data.results);
  };

  return (
    <>
      <Header />
      <input
        className="search-input"
        type="text"
        onChange={handleSearchInputChange}
        onKeyPress={handleSearchInputKeyPress}
        value={searchQuery}
      />
      
      {searchResults.length > 0 && (
        <>
          <h2>Search Results</h2>
          <SearchResults searchResults={searchResults} addToWatchlist={addToWatchlist} />
        </>
      )}
      <Footer />
    </>
  );
}

export default SearchResultsPage;
