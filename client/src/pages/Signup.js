// Importing necessary modules and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/login.css';

// Defining the Signup component
function Signup() {
  // Setting up state for the form inputs and error/success messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Defining a function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Sending a POST request to the /signup route on the server
    const response = await fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    // Handling the response from the server
    if (response.ok) {
      // Signup was successful

      // Updating the successMessage state variable with an appropriate message
      setSuccessMessage('Sign up successful! Redirecting to home page...');

      // Navigating to the home page after a delay
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      // Signup failed
      const data = await response.json();
      setErrorMessage(data.error || 'An error occurred. Please try again.');
    }
  };

  // Defining a function to handle clicks on the "Sign up with Facebook" button
  const handleFacebookSignupClick = () => {
    FB.login(function(response) {
      if (response.authResponse) {
        console.log('User signed up successfully!');

        // Retrieving the user's name and email from Facebook
        FB.api('/me', { fields: 'name,email' }, function(response) {
          // Sending a POST request to the /signup route on the server
          fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: response.name,
              email: response.email,
              password: '',
            }),
          });

          // Navigating to the home page
          navigate('/');
        });
      } else {
        console.error('User cancelled signup or did not fully authorize.');
      }
    });
  };

  // Rendering the signup form with error/success messages and a "Sign up with Facebook" button
  return (
    <div className='signtop'>
      <div className="logo">
    <img src="../images/MovieMate-icon.png" alt="logo" />
    <h3>MovieMate</h3>
  </div>
      <div className="login-container">
        <div className="login-form">
          <h1>Sign Up to MovieMate</h1>
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
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <button type="submit">Sign Up</button>
          </form>

          {/* Rendering a "Sign up with Facebook" button */}
          <button onClick={handleFacebookSignupClick}>Sign up with Facebook</button>
        </div>
      </div>
    </div>
  );
}

// Exporting the Signup component as the default export
export default Signup;

