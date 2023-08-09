// Importing necessary modules and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../CSS/login.css';

// Defining the Login component
function Login({ setLoggedInUser }) {
  // Setting up state for the form inputs and error/success messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Defining a function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Sending a POST request to the /login route on the server
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // Handling the response from the server
    if (response.ok) {
      // Login was successful
      const data = await response.json();
      setLoggedInUser(data.user);

      // Updating the successMessage state variable with an appropriate message
      setSuccessMessage('Login successful! Redirecting to home page...');

      // Navigating to the home page after a delay
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      // Login failed
      const data = await response.json();
      setErrorMessage(data.error || 'An error occurred. Please try again.');
    }
  };

  // Defining a function to handle clicks on the "Login with Facebook" button
  const handleFacebookLoginClick = () => {
    FB.login(function(response) {
      if (response.authResponse) {
        console.log('User logged in successfully!');

        // Retrieving the user's name and profile picture from Facebook
        FB.api('/me', { fields: 'name,picture' }, function(response) {
          // Updating the loggedInUser state variable with the user's information
          setLoggedInUser({
            name: response.name,
            profilePicture: response.picture.data.url,
          });

          // Navigating to the home page
          navigate('/');
        });
      } else {
        console.error('User cancelled login or did not fully authorize.');
      }
    });
  };

  // Rendering the login form with error/success messages and a "Login with Facebook" button
  return (
    <div className='logintop'> 
    <div className="logo">
    <img src="../images/MovieMate-icon.png" alt="logo" />
    <h3>MovieMate</h3>
  </div>
      <div className="login-container">
        <div className="login-form">
          <h1>Sign in to MovieMate</h1>
          {errorMessage && <p>{errorMessage}</p>}
          {successMessage && <p>{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button className='button' type="submit">Sign in</button>
          </form>
          <button onClick={handleFacebookLoginClick}><i className="fab fa-facebook-square"></i> Sign in with Facebook </button>
          <p>
            Don't have an account?{' '}
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>

    </div>
  );
}
// Exporting the Login component as the default export
export default Login;

