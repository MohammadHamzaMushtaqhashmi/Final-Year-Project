import express from "express";
const mysql = require('mysql2');

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
const apiKey = '499d99db6ce23991d21afde0deede0f1';
const baseUrl = 'https://api.themoviedb.org/3';

app.get('/movies/:category', async (req, res) => {
  const category = req.params.category;

  let endpoint;
  switch (category) {
    case 'hollywood':
      endpoint = '/movie/popular';
      break;
    case 'bollywood':
      endpoint = '/discover/movie?with_original_language=hi';
      break;
    // Add additional cases here for other categories
    default:
      res.status(400).send('Invalid category');
      return;
  }

  try {
    const response = await axios.get(`${baseUrl}${endpoint}`, {
      params: {
        api_key: apiKey
      }
    });
    const movies = response.data.results;
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving movie data.');
  }
});
