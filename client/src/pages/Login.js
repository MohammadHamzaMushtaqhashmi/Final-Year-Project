// In Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../CSS/login.css'

function Login({ setLoggedInUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Add this line to manage a successMessage state variable
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add this line to log the email and password values before sending the request
    console.log('email:', email, 'password:', password);

    // Send a POST request to the /login route on your Express server
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
    

    // Handle the response from the server
    if (response.ok) {
      // Login was successful
      // TODO: Redirect the user to another page or show a success message
      
    const data = await response.json();
    // Add this line to log the response status and data after receiving the response
    console.log('response status:', response.status, 'response data:');
    setLoggedInUser(data.user);
    setLoggedInUser(data.user);
      // Add this code to update the successMessage state variable with an appropriate message
    setSuccessMessage('Login successful! Redirecting to home page...');

      // Add this code to navigate to the home page after a delay
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } else {
      // Login failed
      // TODO: Show an error message to the user

      const data = await response.json();
      setErrorMessage(data.error || 'An error occurred. Please try again.');
    }
  };
  

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
    < Footer />
    </>
  );
}

export default Login;

/* 
// In Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../CSS/login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Add this line to manage an errorMessage state variable
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send a POST request to the /login route on your Express server
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // Handle the response from the server
    if (response.ok) {
      // Login was successful
      // TODO: Redirect the user to another page or show a success message
    } else {
      // Login failed
      // TODO: Show an error message to the user

      // Add this code to update the errorMessage state variable with an appropriate message
      const data = await response.json();
      setErrorMessage(data.error || 'An error occurred. Please try again.');
    }
  };
  

  return (
    <>
    <Header />
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        {errorMessage && <p>{errorMessage}</p>} // Add this line to conditionally render an error message
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
    < Footer />
    </>
  );
}

export default Login;*/
