// Middleware is often used for authenticating users (checking if a user is logged in) and authorizing them (checking if a user has permission to access a resource).
const express = require('express');
const app = express();

// Mock user data
const users = {
  admin: { role: 'admin', password: 'admin123' },
  user: { role: 'user', password: 'user123' },
};

// Middleware for authentication
const authenticate = (req, res, next) => {
  const { username, password } = req.query; // In real apps, use req.body and HTTPS
  if (users[username] && users[username].password === password) {
    req.user = { username, role: users[username].role }; // Attach user info to request
    next(); // Proceed to the next middleware
  } else {
    res.status(401).send('Authentication failed!');
  }
};

// Middleware for authorization (admin-only access)
const authorize = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next(); // User is authorized, proceed
    } else {
      res.status(403).send('Forbidden: Access is denied.');
    }
  };
};

// Use the middleware for specific routes
app.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.send('Welcome to the admin panel!');
});

app.get('/profile', authenticate, (req, res) => {
  res.send(`Welcome ${req.user.username}, this is your profile.`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

//http://localhost:3000/profile?username=user&password=wrongpassword
