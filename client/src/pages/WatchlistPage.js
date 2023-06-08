// In WatchlistPage.js
import React from 'react';
import Header from '../Components/Header';
import WatchList from '../Components/WatchList';
import Footer from '../Components/Footer';

function WatchlistPage({ watchlist, removeFromWatchlist }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: 'calc(120vh - 200px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {watchlist.length === 0 ? (
          <p style={{ textAlign: 'center', fontSize: '24px', color: '#777' }}>
            Your watchlist is empty 😔
            </p>
        ) : (
          <WatchList watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default WatchlistPage;

/*
// In WatchlistPage.js
import React from 'react';
import Header from '../Components/Header';
import WatchList from '../Components/WatchList';
import Footer from '../Components/Footer';

function WatchlistPage({ watchlist, removeFromWatchlist }) {
  return (
    <>
      <Header />
      <div style={{ flex: 1,  }}>
        <h1>My Watchlist</h1>
        {watchlist.length === 0 ? (
          <p>Your watchlist is empty 😔</p>
        ) : (
          <WatchList watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default WatchlistPage;

// In WatchlistPage.js
/*import React from 'react';
import Header from '../Components/Header';
import WatchList from '../Components/WatchList';
import Footer from '../Components/Footer';

function WatchlistPage({ watchlist, removeFromWatchlist }) {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <h1>My Watchlist</h1>
        {watchlist.length === 0 ? (
          <p>Your watchlist is empty 😔</p>
        ) : (
          <WatchList watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default WatchlistPage;*/


