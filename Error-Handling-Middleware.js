// Error-handling middleware functions have four arguments: err, req, res, next. It is defined after all other app middleware and routes.
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  throw new Error('Something went wrong!'); // Simulate an error
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).send('Something went wrong!'); // Send a response to the client
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
