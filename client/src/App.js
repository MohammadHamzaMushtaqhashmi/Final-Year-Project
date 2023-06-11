// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WatchlistPage from './pages/WatchlistPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Signup from './pages/Signup';
import Login from './pages/Login'; // Importing the Login page
import './App.css';

// Defining the App component
function App() {
  // Setting up state for the user's watchlist and logged-in user
  const [watchlist, setWatchlist] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Defining a function to add a movie to the watchlist
  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  };

  // Defining a function to remove a movie from the watchlist
  const removeFromWatchlist = (movieToRemove) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.id !== movieToRemove.id)
    );
  };

  // Using an effect hook to log the value of loggedInUser whenever it changes
  useEffect(() => {
    console.log('loggedInUser:', loggedInUser);
  }, [loggedInUser]);

  // Rendering the app with routes for different pages
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home watchlist={watchlist} addToWatchlist={addToWatchlist} loggedInUser={loggedInUser} />
          }
        />
        <Route
          path="/WatchList"
          element={
            <WatchlistPage
              watchlist={watchlist}
              setWatchlist={setWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
        <Route
          path="/SearchResults"
          element={<SearchResultsPage addToWatchlist={addToWatchlist} />}
        />
        <Route path="/signup" element={<Signup />} /> // Adding a Route for the Signup page
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
      </Routes>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;