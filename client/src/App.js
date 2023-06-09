// In App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WatchlistPage from './pages/WatchlistPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Signup from './pages/Signup';
import Login from './pages/Login'; // Import the Login page

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  };

  const removeFromWatchlist = (movieToRemove) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter((movie) => movie.id !== movieToRemove.id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home watchlist={watchlist} addToWatchlist={addToWatchlist} />} />
        <Route path="/WatchList" element={<WatchlistPage watchlist={watchlist} setWatchlist={setWatchlist} removeFromWatchlist={removeFromWatchlist} />} />
        <Route path="/SearchResults" element={<SearchResultsPage addToWatchlist={addToWatchlist} />} />
        <Route path="/signup" element={<Signup />} /> // Add a Route for the Signup page
        <Route path="/login" element={<Login />} /> // Add a Route for the Login page
      </Routes>
    </Router>
  );
}

export default App;

/*
// In App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WatchlistPage from './pages/WatchlistPage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  };

  const removeFromWatchlist = (movieToRemove) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter((movie) => movie.id !== movieToRemove.id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home watchlist={watchlist} addToWatchlist={addToWatchlist} />} />
        <Route path="/WatchList" element={<WatchlistPage watchlist={watchlist} setWatchlist={setWatchlist} removeFromWatchlist={removeFromWatchlist} />} />
        <Route path="/SearchResults" element={<SearchResultsPage addToWatchlist={addToWatchlist} />} />
      </Routes>
    </Router>
  );
}

export default App;*/


