// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WatchlistPage from './pages/WatchlistPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Signup from './pages/Signup';
import Login from './pages/Login'; 
import Profile from './pages/Profile';
import MoviesList from './Components/MoviesList';
import MoviePage from './pages/MoviePage'; 
import FavouriteList from './pages/FavouriteList';
import PollList from './pages/PollList';
import { UserProvider } from './Components/UserContext';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  
   useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, []);
   
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  const addToWatchlist = async (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  
    const interactionResponse = await fetch('/api/storeInteraction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.id,
        movieId: movie.id,
        interactionType: 'add_to_watchlist',
        timestamp: Date.now(),
      }),
    });
  
    const interactionData = await interactionResponse.json();
    console.log(interactionData.message);
  };
  

  const removeFromWatchlist = (movieToRemove) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.id !== movieToRemove.id)
    );
  };

  function login(userData) {
    // Make a request to the server to authenticate the user
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.authenticated) {
        // If the server authenticated the user, update the context and local storage
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        console.error('Failed to authenticate user');
      }
    })
    .catch(error => console.error('Error:', error));
  }
  /*
  function login(userData) {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }
*/
  function logout() {
    setUser(null);
    localStorage.removeItem('user');
  }

return (
  <UserProvider value={{ user, setUser, login, logout }}> 
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
      <Route
        path="/searchresults"
        element={
          <SearchResultsPage
            addToWatchlist={addToWatchlist}
          />
        }
      />
      <Route path="/signup" element={<Signup />} /> // Adding a Route for the Signup page
      <Route
        path="/login"
        element={<Login  />}
      />
      <Route
        path="/profile"
        element={
          <Profile/>
        }
      />
      <Route exact path="/" component={MoviesList} />
      <Route
        path="/movie/:id"
        element={<MoviePage />}
      />
      <Route
        path="/favourite-list"
        element={
          <FavouriteList
          />
        }
      />
      <Route
        path="/poll-list"
        element={
          <PollList
        />
        }
    />
    </Routes>
  </Router>
  </UserProvider>
);
}
export default App;


/*
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
import FavouriteList from './pages/FavouriteList';
import PollList from './pages/PollList';
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
  const addToWatchlist = async (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  
    // Store 'add_to_watchlist' interaction in database
    const interactionResponse = await fetch('/api/storeInteraction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: loggedInUser.id,
        movieId: movie.id,
        interactionType: 'add_to_watchlist',
        timestamp: Date.now(),
      }),
    });
  
    const interactionData = await interactionResponse.json();
    console.log(interactionData.message);
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
      <Route
        path="/favourite-list"
        element={
          <FavouriteList
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
            fetchUserData={fetchUserData}
          />
        }
      />
      <Route
        path="/poll-list"
        element={
          <PollList
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
          fetchUserData={fetchUserData}
        />
        }
    />
    </Routes>
  </Router>
);
}
export default App;

*/