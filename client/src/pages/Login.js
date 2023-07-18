// Importing necessary modules and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../CSS/login.css'

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
      }, 10000);
    } else {
      // Login failed
      const data = await response.json();
      setErrorMessage(data.error || 'An error occurred. Please try again.');
    }
  };

  // Rendering the login form with error/success messages
  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
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
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="login-image">
          <img src="./images/cover.jpg" alt="cover" />
        </div>
      </div>
      <Footer />
    </>
  );
}

// Exporting the Login component as the default export
export default Login;



