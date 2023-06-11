// Importing necessary modules and components
import React from 'react';
import Header from '../Components/Header';
import WatchList from '../Components/WatchList';
import Footer from '../Components/Footer';

// Defining the WatchlistPage component
function WatchlistPage({ watchlist, removeFromWatchlist }) {
  // Rendering the user's watchlist or a message if it's empty
  return (
    <>
      <Header />
      <div
        style={{
          minHeight: 'calc(120vh - 200px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {watchlist.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              fontSize: '24px',
              color: '#777',
            }}
          >
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

// Exporting the WatchlistPage component as the default export
export default WatchlistPage;
