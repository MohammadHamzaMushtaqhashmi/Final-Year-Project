// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import WatchlistPage from './pages/WatchlistPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Signup from './pages/Signup';
import Login from './pages/Login'; 
import Profile from './pages/Profile';
import MoviesList from './Components/MoviesList';
import MoviePage from './pages/MoviePage'; 
import './App.css';

function App() {

  const [watchlist, setWatchlist] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    const storedLoggedInUser = localStorage.getItem('loggedInUser');
    console.log('storedLoggedInUser:', storedLoggedInUser); 
    if (storedLoggedInUser) {
      setLoggedInUser(JSON.parse(storedLoggedInUser));
    }
  }, []);

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  };

  const removeFromWatchlist = (movieToRemove) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.id !== movieToRemove.id)
    );
  };


  useEffect(() => {
    console.log('loggedInUser:', loggedInUser); 
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  const fetchUserData = (userId) => {
    axios
      .get(`/user/${userId}`)
      .then((response) => {
        setLoggedInUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
const handleSignIn = (e) => {
  e.preventDefault();
  axios
    .post('/signin', { email: email, password: password })
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      fetchUserData(token);
    })
    .catch((error) => {
      console.error(error);
    });
};
const handleLogOut = () => {
  localStorage.removeItem('token');
  setLoggedInUser(null);
};
useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    fetchUserData(token);
  }
}, []); 
return (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Home
            watchlist={watchlist}
            addToWatchlist={addToWatchlist}
            loggedInUser={loggedInUser}
            setLoggedInUser = {setLoggedInUser}
            fetchUserData={fetchUserData} 
          />
        }
      />
      <Route
        path="/watchlist"
        element={
          <WatchlistPage
            watchlist={watchlist}
            setWatchlist={setWatchlist}
            removeFromWatchlist={removeFromWatchlist}
            loggedInUser={loggedInUser} 
            setLoggedInUser = {setLoggedInUser} 
            fetchUserData={fetchUserData} 
          />
        }
      />
      <Route
        path="/searchresults"
        element={
          <SearchResultsPage
            addToWatchlist={addToWatchlist}
            loggedInUser={loggedInUser} 
            setLoggedInUser = {setLoggedInUser}
            fetchUserData={fetchUserData} 
          />
        }
      />
      <Route path="/signup" element={<Signup />} /> // Adding a Route for the Signup page
      <Route
        path="/login"
        element={<Login setLoggedInUser={setLoggedInUser} />}
      />
      <Route
        path="/profile"
        element={
          <Profile loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        }
      />
      <Route exact path="/" component={MoviesList} />
      <Route
        path="/movie/:id"
        element={<MoviePage loggedInUser={loggedInUser}  setLoggedInUser = {setLoggedInUser} fetchUserData={fetchUserData} />}
      />
    </Routes>
  </Router>
);
}
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
import Profile from './pages/Profile';
import MoviesList from './Components/MoviesList';
import MoviePage from './pages/MoviePage'; // Importing the MoviePage component
import AuthProvider from './Components/AuthProvider'; // Importing the AuthProvider component
import './App.css';

// Defining the App component
function App() {
  // Setting up state for the user's watchlist
  const [watchlist, setWatchlist] = useState([]);

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

  // Rendering the app with routes for different pages
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                watchlist={watchlist}
                addToWatchlist={addToWatchlist}
              />
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
          <Route path="/searchresults" element={<SearchResultsPage addToWatchlist={addToWatchlist} />} />
          <Route path="/signup" element={<Signup />} /> // Adding a Route for the Signup page

          <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<Profile />} />

          <Route exact path="/" component={MoviesList} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// Exporting the App component as the default export
export default App;
*/
