// If your middleware involves asynchronous operations (like database queries or external API calls), you can use async functions with await or handle promises to avoid blocking the main thread.

const express = require('express');
const app = express();

// Mock function to simulate an asynchronous operation (like fetching from a database)
const fetchUserData = async (username) => {
  if (username === 'admin') {
    return { username: 'admin', role: 'admin' }; // Simulated user data
  } else {
    throw new Error('User not found');
  }
};

// Middleware to fetch user data asynchronously
const asyncMiddleware = async (req, res, next) => {
  try {
    const userData = await fetchUserData(req.query.username); // Async operation
    req.user = userData; // Attach user data to request
    next(); // Proceed to the next middleware
  } catch (err) {
    next(err); // Pass error to the error-handling middleware
  }
};

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Internal Server Error');
});

app.get('/', asyncMiddleware, (req, res) => {
  res.send(`Hello, ${req.user.username}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
