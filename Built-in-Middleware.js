// Express has several built-in middleware functions, like:

// express.json(): Parses incoming requests with JSON payloads.
// express.urlencoded(): Parses incoming requests with URL-encoded payloads.
// express.static(): Serves static files like images, CSS files, and JavaScript files.

const express = require('express');
const app = express();

// Built-in middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Built-in middleware to serve static files from the "public" directory
// app.use(express.static('public'));

app.post('/submit', (req, res) => {
  console.log(req.body); // Access the parsed request body
  res.send('Form Submitted!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
