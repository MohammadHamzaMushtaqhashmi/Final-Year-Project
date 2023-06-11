import express from "express";
import cors from "cors";
import session from 'express-session';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'moviemate'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected to the MySQL server.');
  }
});

const PORT = process.env.PORT || 3001;
const app = express();

// Add this line to use the cors middleware
app.use(cors());
// Add this after you initialize the app variable
app.use(session({
  secret: 'your secret here',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Add this line to use the express.json() middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// In index.js
app.post('/signup', (req, res) => {
  // Get the user data from the request body
  const { username, email, password } = req.body;

  // TODO: Validate the user data
  if (!username || !email || !password) {
    // Send an error response if any of the fields are missing
    res.status(400).json({ error: 'Missing username, email, or password' });
    return;
  }

  // Hash the password before storing it in the database
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Insert the user data into the database
  connection.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword],
    (error, results) => {
      if (error) {
        // Handle errors
        res.status(500).json({ error });
      } else {
        // Send a success response
        res.json({ message: 'User created successfully' });
      }
    }
  );
});
// In index.js
app.post('/login', (req, res) => {
  // Get the user data from the request body
  const { email, password } = req.body;

  // TODO: Validate the user data

  // Check if a user with the given email address exists in the database
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (error) {
        // Handle errors
        res.status(500).json({ error });
      } else if (results.length === 0) {
        // No user with the given email address was found
        res.status(401).json({ error: 'Invalid email or password' });
      } else {
        // A user with the given email address was found
        const user = results[0];

        // Check if the given password matches the hashed password in the database
        if (bcrypt.compareSync(password, user.password)) {
          // Password is correct

          // TODO: Create a session for the user and send a success response
          req.session.user = user; // Set a session variable for the logged-in user
          // Add this line to log the value of user before sending it back to the client
          console.log('user:', user);

          // Update this line to send back the logged-in user's data in the response
          res.json({ message: 'Login successful', user });
        } else {
          // Password is incorrect
          res.status(401).json({ error: 'Invalid email or password' });
        }
      }
    }
  );
});

/*
// In index.js
app.post('/login', (req, res) => {
  // Get the user data from the request body
  const { email, password } = req.body;
  if (bcrypt.compareSync(password, user.password)) {
    // Password is correct

    // TODO: Create a session for the user and send a success response
    req.session.user = user; // Set a session variable for the logged-in user

    // Update this line to send back the logged-in user's data in the response
    res.json({ message: 'Login successful', user });
  } else {
    // Password is incorrect
    res.status(401).json({ error: 'Invalid email or password' });
  }

  // TODO: Validate the user data

  // Check if a user with the given email address exists in the database
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (error) {
        // Handle errors
        res.status(500).json({ error });
      } else if (results.length === 0) {
        // No user with the given email address was found
        res.status(401).json({ error: 'Invalid email or password' });
      } else {
        // A user with the given email address was found
        const user = results[0];

        // Check if the given password matches the hashed password in the database
        if (bcrypt.compareSync(password, user.password)) {
          // Password is correct

          // TODO: Create a session for the user and send a success response
          req.session.user = user; // Set a session variable for the logged-in user
          res.json({ message: 'Login successful' }); // Send a success response

        } else {
          // Password is incorrect
          res.status(401).json({ error: 'Invalid email or password' });
        }
      }
    }
  );
});
*/
