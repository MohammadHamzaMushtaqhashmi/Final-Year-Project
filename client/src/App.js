// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WatchlistPage from './pages/WatchlistPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Signup from './pages/Signup';
import Login from './pages/Login'; // Importing the Login page
import MoviesList from './Components/MoviesList';
import MoviePage from './pages/MoviePage'; // Importing the MoviePage component
import './App.css';

// Defining the App component
function App() {
  // Setting up state for the user's watchlist and logged-in user
  const [watchlist, setWatchlist] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Using an effect hook to check for a stored loggedInUser value when the component mounts
  useEffect(() => {
    const storedLoggedInUser = localStorage.getItem('loggedInUser');
    if (storedLoggedInUser) {
      setLoggedInUser(JSON.parse(storedLoggedInUser));
    }
  }, []);

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
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
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
          path="/watchlist"
          element={
            <WatchlistPage
              watchlist={watchlist}
              setWatchlist={setWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
        <Route
          path="/searchresults"
          element={<SearchResultsPage addToWatchlist={addToWatchlist} />}
        />
        <Route path="/signup" element={<Signup />} /> // Adding a Route for the Signup page
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route exact path="/" component={MoviesList} />
        <Route
          path="/movie/:id"
          element={<MoviePage loggedInUser={loggedInUser} />}
        />
      </Routes>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;

/*
// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WatchlistPage from './pages/WatchlistPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Signup from './pages/Signup';
import Login from './pages/Login'; // Importing the Login page
import MoviesList from './Components/MoviesList';
import MoviePage from './pages/MoviePage'; // Importing the MoviePage component
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
          path="/watchlist"
          element={
            <WatchlistPage
              watchlist={watchlist}
              setWatchlist={setWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          }
        />
        <Route
          path="/searchresults"
          element={<SearchResultsPage addToWatchlist={addToWatchlist} />}
        />
        <Route path="/signup" element={<Signup />} /> // Adding a Route for the Signup page
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route exact path="/" component={MoviesList} />
        <Route
          path="/movie/:id"
          element={<MoviePage />}
        />
      </Routes>
    </Router>
  );
}

// Exporting the App component as the default export
export default App;
*/