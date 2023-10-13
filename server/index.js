import express from "express";
import cors from "cors";
import session from 'express-session';
import bcrypt from 'bcrypt';
import connection from "./schema.js";
import movieListRouter from './movie-list.js';
import pollRouter from './polls.js'; 


const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.use(session({
  secret: 'your secret here',
  resave: false,
  saveUninitialized: true,
  cookie: {  maxAge: 24 * 60 * 60 * 1000, }
  
}));

app.use(express.json());

app.use('/movie-list', movieListRouter);

app.use('/poll', pollRouter);




app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ error: 'Missing username, email, or password' });
    return;
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  connection.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword],
    (error, results) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.json({ message: 'User created successfully' });
      }
    }
  );
});
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (error) {
        res.status(500).json({ error });
      } else if (results.length === 0) {
        res.status(401).json({ error: 'Invalid email or password' });
      } else {
        const user = results[0];

        if (bcrypt.compareSync(password, user.password)) {
          // If the user is authenticated, store their information in req.session
          req.session.user = user; 
          res.json({ authenticated: true, user });
        } else {
          // Password is incorrect
          res.status(401).json({ error: 'Invalid email or password' });
        }
      }
    }
  );
});

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

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  if (userId) {
    connection.query(
      'SELECT * FROM users WHERE id = ?',
      [userId],
      (error, results) => {
        if (error) {
          res.status(500).json({
            message: 'Something went wrong',
            error: error,
          });
        } else if (results.length === 0) {
          res.status(404).json({
            message: 'User not found',
          });
        } else {
          const user = results[0];
          res.status(200).json({
            message: 'User data fetched successfully',
            data: user,
          });
        }
      }
    );
  } else {
    res.status(400).json({
      message: 'User ID is missing',
    });
  }
});

app.post('/api/storeInteraction', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  const { movieId, interactionType } = req.body;
  const userId = req.session.user.id; 
  const timestamp = Date.now();
  connection.query(
    'INSERT INTO user_interactions (userId, movieId, interactionType, timestamp) VALUES (?, ?, ?, ?)',
    [userId, movieId, interactionType, timestamp],
    (error) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while storing the interaction' });
      } else {
        res.sendStatus(204);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});