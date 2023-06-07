/*import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import WatchlistPage from './Components/WatchlistPage';
import SearchResultsPage from './Components/SearchResultsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WatchList" element={<WatchlistPage />} />
        <Route path="/SearchResults" element={<SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WatchlistPage from './pages/WatchlistPage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/WatchList" element={<WatchlistPage />} />
      <Route path="/SearchResults" element={<SearchResultsPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;

