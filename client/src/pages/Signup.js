// Importing necessary modules and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
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
      }, 3000);
    } else {
      // Signup failed
      const data = await response.json();
      setErrorMessage(data.error || 'An error occurred. Please try again.');
    }
  };

  // Rendering the signup form with error/success messages
  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="signup-form">
          <h1>Sign Up</h1>
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
        </div>
        <div className="signup-image">
          <img src="./images/cover.jpg" alt="cover" />
        </div>
      </div>
      <Footer />
    </>
  );
}

// Exporting the Signup component as the default export
export default Signup;
