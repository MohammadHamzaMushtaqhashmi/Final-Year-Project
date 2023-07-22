import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Components/Header'; // Importing the Header component
import Footer from '../Components/Footer'; // Importing the Footer component
import '../CSS/moviepage.css'; // Importing the moviepage.css file

// Defining constants for the API key and base URL
const apiKey = '499d99db6ce23991d21afde0deede0f1';
const baseUrl = 'https://api.themoviedb.org/3';

function MoviePage({ loggedInUser }) {
  // Using the useParams hook to get the ID of the selected movie from the URL parameter
  const { id } = useParams();
  const navigate = useNavigate();

  // Setting up state for the movie details, cast, reviews, and trailer video
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [showAllCast, setShowAllCast] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [trailerVideoKey, setTrailerVideoKey] = useState(null);

  // Setting up state for the review form
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  // Using an effect hook to fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      // Fetching the details for the selected movie from the TMDb API
      const detailsResponse = await axios.get(
        `${baseUrl}/movie/${id}`,
        {
          params: {
            api_key: apiKey,
          },
        }
      );
      setMovieDetails(detailsResponse.data);

      // Fetching the credits for the selected movie from the TMDb API
      const creditsResponse = await axios.get(
        `${baseUrl}/movie/${id}/credits`,
        {
          params: {
            api_key: apiKey,
          },
        }
      );
      setCast(creditsResponse.data.cast);

      // Fetching videos for the selected movie from the TMDb API
      const videosResponse = await axios.get(
        `${baseUrl}/movie/${id}/videos`,
        {
          params: {
            api_key: apiKey,
          },
        }
      );
      // Finding a trailer video and setting its key in state
      const trailerVideo = videosResponse.data.results.find(
        (video) => video.type === 'Trailer'
      );
      if (trailerVideo) {
        setTrailerVideoKey(trailerVideo.key);
      }

      // TODO: Fetch existing reviews for the selected movie from the server
    };
    fetchData();
  }, [id]);

  // Handling form submission
  const submitReview = async (e) => {
    e.preventDefault();
    if (!loggedInUser) {
      navigate('/login');
    } else {
      // TODO: Submit review data to server and update reviews state with new review

      alert('Review submitted!');
      setReviewText('');
      setRating(0);
    }
  };

  // Rendering a review component
  const Review = ({ review }) => (
    <div>
      {/* TODO: Render user profile picture and name */}
      <p>{review.text}</p>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} style={{ color: star <= review.rating ? 'gold' : 'gray' }}>
            ★
          </span>
        ))}
      </div>
    </div>
  );

  // Rendering the Header, movie details, cast, reviews, review form, and Footer
  return (
    <>
      <Header loggedInUser={loggedInUser} />
      <div className="movie-page">
        <div className="trailer-and-details">
          {trailerVideoKey && (
            <div className="trailer-container">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="movie-details">
            {movieDetails && (
              <>
                <h1>{movieDetails.title}</h1>
                <p>{movieDetails.overview}</p>
              </>
            )}
          </div>
        </div>
        <h2>Cast</h2>
        <div className="cast-list">
          {(showAllCast ? cast : cast.slice(0, 5)).map((actor) => (
            <div key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
            </div>
          ))}
          {cast.length > 5 && (
            <button onClick={() => setShowAllCast(!showAllCast)}>
              More
            </button>
          )}
        </div>
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
        <h3>Write a review</h3>
        <form onSubmit={submitReview}>
          <label htmlFor="review-text">Your review:</label><br/>
          <textarea id="review-text" value={reviewText} onChange={(e) => setReviewText(e.target.value)} /><br/>
          <label htmlFor="rating">Your rating:</label><br/>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                style={{ color: star <= rating ? 'gold' : 'gray' }}
              >
                ★
              </button>
            ))}
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default MoviePage;
