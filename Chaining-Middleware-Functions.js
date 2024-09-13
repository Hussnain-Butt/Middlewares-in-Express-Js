// You can chain multiple middleware functions for a single route. This is useful when you want to apply multiple checks or processing steps before sending a response.
const express = require('express');
const app = express();

// Middleware to check if the user is logged in
const checkLogin = (req, res, next) => {
  console.log('Checking if the user is logged in...');
  // Simulate a check (always true in this example)
  const loggedIn = true;
  if (loggedIn) {
    next(); // If logged in, proceed to the next middleware
  } else {
    res.status(401).send('Unauthorized');
  }
};

// Middleware to log request details
const logRequestDetails = (req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next(); // Proceed to the next middleware
};

// Define a route that chains multiple middleware functions
app.get('/dashboard', checkLogin, logRequestDetails, (req, res) => {
  res.send('Welcome to your dashboard!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
