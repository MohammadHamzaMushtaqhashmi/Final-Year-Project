/*This code is for a Node.js server using the Express framework. It sets up a connection to a MySQL database and
 defines routes for user authentication (signup and login).
 Here’s an explanation of each line: */
// Importing necessary modules
import express from "express";
import cors from "cors";
import session from 'express-session';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';

// Creating a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'moviemate'
});

// Connecting to the MySQL server
connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected to the MySQL server.');
  }
});

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3001;
const app = express();

// Using the cors middleware to allow cross-origin requests
app.use(cors());

// Using the express-session middleware to enable session management
app.use(session({
  secret: 'your secret here',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Using the express.json() middleware to parse JSON request bodies
app.use(express.json());

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Defining a GET route for the /api endpoint that returns a JSON response
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Defining a POST route for the /signup endpoint that handles user registration
app.post('/signup', (req, res) => {
  // Getting the user data from the request body
  const { username, email, password } = req.body;

  // Validating the user data
  if (!username || !email || !password) {
    // Sending an error response if any of the fields are missing
    res.status(400).json({ error: 'Missing username, email, or password' });
    return;
  }

  // Hashing the password before storing it in the database
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Inserting the user data into the database
  connection.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword],
    (error, results) => {
      if (error) {
        // Handling errors
        res.status(500).json({ error });
      } else {
        // Sending a success response
        res.json({ message: 'User created successfully' });
      }
    }
  );
});

// Defining a POST route for the /login endpoint that handles user authentication
app.post('/login', (req, res) => {
  // Getting the user data from the request body
  const { email, password } = req.body;

  // Checking if a user with the given email address exists in the database
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (error) {
        // Handling errors
        res.status(500).json({ error });
      } else if (results.length === 0) {
        // No user with the given email address was found
        res.status(401).json({ error: 'Invalid email or password' });
      } else {
        // A user with the given email address was found
        const user = results[0];

        // Checking if the given password matches the hashed password in the database
        if (bcrypt.compareSync(password, user.password)) {
          // Password is correct

          // Creating a session for the user and sending a success response
          req.session.user = user; // Setting a session variable for the logged-in user

          res.json({ message: 'Login successful', user });
        } else {
          // Password is incorrect
          res.status(401).json({ error: 'Invalid email or password' });
        }
      }
    }
  );
});

// Defining a POST route for handling review submissions
app.post('/reviews', (req, res) => {
    const { movieId, text, rating } = req.body;
    
    if (!movieId || !text || !rating) {
        return res.status(400).json({ error: 'Invalid review data' });
    }

    if (!req.session.user) {
        return res.status(401).json({ error: 'Not authenticated' });
    }

    connection.query(
        'INSERT INTO reviews (movie_id, user_id, text, rating) VALUES (?, ?, ?, ?)',
        [movieId, req.session.user.id, text, rating],
        (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while submitting your review' });
            } else {
                res.sendStatus(204);
            }
        }
    );
});

 /*
 // Importing necessary modules
import express from "express";
import cors from "cors";
import session from 'express-session';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';

// Creating a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'moviemate'
});

// Connecting to the MySQL server
connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected to the MySQL server.');
  }
});

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3001;
const app = express();

// Using the cors middleware to allow cross-origin requests
app.use(cors());

// Using the express-session middleware to enable session management
app.use(session({
  secret: 'your secret here',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Using the express.json() middleware to parse JSON request bodies
app.use(express.json());

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Defining a GET route for the /api endpoint that returns a JSON response
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Defining a POST route for the /signup endpoint that handles user registration
app.post('/signup', (req, res) => {
  // Getting the user data from the request body
  const { username, email, password } = req.body;

  // Validating the user data
  if (!username || !email || !password) {
    // Sending an error response if any of the fields are missing
    res.status(400).json({ error: 'Missing username, email, or password' });
    return;
  }

  // Hashing the password before storing it in the database
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Inserting the user data into the database
  connection.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword],
    (error, results) => {
      if (error) {
        // Handling errors
        res.status(500).json({ error });
      } else {
        // Sending a success response
        res.json({ message: 'User created successfully' });
      }
    }
  );
});

// Defining a POST route for the /login endpoint that handles user authentication
app.post('/login', (req, res) => {
  // Getting the user data from the request body
  const { email, password } = req.body;

  // Checking if a user with the given email address exists in the database
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (error) {
        // Handling errors
        res.status(500).json({ error });
      } else if (results.length === 0) {
        // No user with the given email address was found
        res.status(401).json({ error: 'Invalid email or password' });
      } else {
        // A user with the given email address was found
        const user = results[0];

        // Checking if the given password matches the hashed password in the database
        if (bcrypt.compareSync(password, user.password)) {
          // Password is correct

          // Creating a session for the user and sending a success response
          req.session.user = user; // Setting a session variable for the logged-in user

          res.json({ message: 'Login successful', user });
        } else {
          // Password is incorrect
          res.status(401).json({ error: 'Invalid email or password' });
        }
      }
    }
  );
});
*/
