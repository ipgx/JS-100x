// Basic Express HTTP server
// Usage:
//   1) npm init -y
//   2) npm install express
//   3) node 00_Intro_Express.js
//    or add to package.json: "start": "node 00_Intro_Express.js" and run `npm start`

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple root route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Example JSON route
app.get('/json', (req, res) => {
  res.json({ message: 'Hello, Express!', timestamp: Date.now() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
