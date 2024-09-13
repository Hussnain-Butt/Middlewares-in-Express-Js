// Application-level middleware is bound to an instance of the express app using app.use() or a specific HTTP method like app.get(), app.post(), etc.

const express = require('express');
const app = express();

// A simple middleware function to log the request method and URL
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Call the next middleware in the stack
};

// Use the middleware for all routes
app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:3000');
});
