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
