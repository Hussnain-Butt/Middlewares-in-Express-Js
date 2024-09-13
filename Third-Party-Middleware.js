// You can install third-party middleware via npm. Popular examples include:

// morgan: HTTP request logger middleware.
// body-parser: Middleware to handle different types of request bodies (though its functionality is now included in express.json() and express.urlencoded()).
// cors: Middleware for enabling Cross-Origin Resource Sharing.

const express = require('express');
const morgan = require('morgan'); // Import the third-party middleware
const app = express();

// Use morgan to log requests
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
