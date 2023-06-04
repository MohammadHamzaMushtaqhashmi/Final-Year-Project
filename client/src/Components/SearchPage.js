import React, { useState, useEffect } from 'react';
import Header from './Header';


function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=499d99db6ce23991d21afde0deede0f1&query=${searchQuery}`
      )
        .then((response) => response.json())
        .then((data) => setSearchResults(data.results));
    }
  }, [searchQuery]);

  return (
    <>
    <Header />
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <ul className="search-results">
        {searchResults.map((result) => (<li key={result.id}>
            <h2>{result.title}</h2>
            <p>Release date: {result.release_date}</p>
            <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title} /></li>
            ))}
        </ul>
    </>
  );
}
export default SearchPage;