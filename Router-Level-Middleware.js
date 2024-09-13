// Router-level middleware works similarly to application-level middleware but is bound to an instance of express.Router().
const express = require('express');
const app = express();
const router = express.Router();


// Define routes
router.get('/', (req, res) => {
  res.send('Home Page');
});

router.get('/contact', (req, res) => {
  res.send('Contact Page');
});

// Mount the router at the /api path
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
